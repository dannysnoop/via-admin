"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailAndPasswordImap = void 0;
const constant_1 = require("../helper/constant");
const Imap = require('imap'), inspect = require('util').inspect;
const simpleParser = require('mailparser').simpleParser;
let isFirstMailEvent = true;
let money = 0;
const paymentMessage = '';
async function emailAndPasswordImap({ user, password }, service, SyntaxTransfer = '') {
    const imap = new Imap({
        user,
        password,
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
    });
    function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
    }
    const senderEmail = 'no-reply@cake.vn';
    let lastMessageSeqno = 0;
    imap.once('ready', function () {
        console.log('Connected to Gmail');
        openInbox(function (err, box) {
            if (err)
                throw err;
            console.log('Opened INBOX');
        });
        imap.on('mail', function (numNewMsgs) {
            if (isFirstMailEvent) {
                isFirstMailEvent = false;
                return;
            }
            console.log('New email(s) received:', numNewMsgs);
            openInbox(function (err, box) {
                if (err)
                    throw err;
                imap.search(['UNSEEN', ['FROM', senderEmail]], function (err, results) {
                    if (err)
                        throw err;
                    console.log(`Found ${results.length} unseen message(s) from ${senderEmail}`);
                    if (results.length > 0) {
                        lastMessageSeqno = Math.max(...results);
                        const fetch = imap.fetch([lastMessageSeqno], { bodies: '' });
                        fetch.on('message', function (msg, seqno) {
                            console.log('Message #%d', seqno);
                            const prefix = '(#' + seqno + ') ';
                            msg.on('body', function (stream, info) {
                                simpleParser(stream, async (err, mail) => {
                                    if (err)
                                        throw err;
                                    const lines = mail.text.split('\n');
                                    let payment = '';
                                    const moneyPayment = ['Số tiền'];
                                    let index = 0;
                                    for (const line of lines) {
                                        index = line.indexOf(moneyPayment);
                                        if (index !== -1) {
                                            const indexMoney = line.split(' ').indexOf('tiền') + 1;
                                            money = line
                                                .split(' ')[indexMoney].replace('+', '')
                                                .replace('.', '');
                                            console.log('money ===>', money);
                                            if (money <= 0) {
                                                return;
                                            }
                                            payment = lines[16];
                                        }
                                    }
                                    let secretCodeClientSend = '';
                                    let syntaxCode = '';
                                    if (payment.includes('MBVCB')) {
                                        const secret = payment.split('.')[3];
                                        secretCodeClientSend = secret.split(' ')[0];
                                        syntaxCode = secret.split(' ')[1];
                                    }
                                    else {
                                        secretCodeClientSend = payment.split(' ')[0];
                                        syntaxCode = payment.split(' ')[1];
                                    }
                                    if (SyntaxTransfer && syntaxCode &&
                                        SyntaxTransfer.toLowerCase() === syntaxCode.toLowerCase()) {
                                        const transactionDto = await service.autoCreateTransaction(secretCodeClientSend, money, constant_1.DEPOSIT.VP);
                                    }
                                });
                            });
                            msg.once('attributes', function (attrs) {
                                console.log(prefix + 'Attributes:', attrs);
                            });
                            msg.once('end', function () {
                                console.log(prefix + 'Finished');
                            });
                        });
                    }
                });
            });
        });
    });
    imap.once('error', function (err) {
        console.log(err);
    });
    imap.once('end', function () {
        console.log('Connection ended');
    });
    imap.connect();
}
exports.emailAndPasswordImap = emailAndPasswordImap;
//# sourceMappingURL=mail-bank-listen.js.map