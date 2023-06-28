import { referral } from './referral.interface';

export const juno =   {
  title: 'Juno - Online Bank',
  desc: 'FDIC-insured bank. 5.12% APY up to $25,000. 4% APY on remaining savings.',
  desc2: '5% cash back on up to 5 pre-selected merchants',
  desc3:
    'They offer <b>optional</b> crypto services which you can ignore and just use the banking/debit card services. Remember that cryptocurrency is not FDIC-insured so if you do buy speculative crypto assets, you should move them into a self-custody wallet. More details: ' +
    `<a target="_blank" href="https://www.doctorofcredit.com/juno-bank-earn-2-15-apy-guaranteed-for-12-months-first-1000-that-pre-register/">DoctorOfCredit post</a>`,
  desc4:
    'Add $25,000 by February 15th, 2023, reach out to support and hold $20,000 for 15 days to get a bonus (around $35).' +
    ` Details here: <a target="_blank" href="https://help.juno.finance/en/articles/6890579-10-000-jcoin-bonus-when-you-hit-a-balance-of-25-000-in-your-juno-checking-account">` +
    'official Juno info post</a>',
  link: 'https://onjuno.onelink.me/TkoI/referral?code=MICHG2TP',
  linkDesc: 'Juno signup',
  pros: ['5.12% APY, has kept up with rate increases in last year', 
  'debit card offers 5% cashback on certain brands', ''],
  cons: [
    'New company. No branch locations.',
    'Heavy advertisements for crypto use. Referral bonus only for $50 crypto purchase',
    'Camera access required for selfie and govt ID (use mobile app to speed up the verification)',
    'Does not support multiple login sessions yet. You will need to logout mobile app to use on your computer and vice-versa'
  ],
  lastUpdated: 'Feb 2023',
}
export const topReferrals: referral[] = [
  juno, 
  {
    title: 'Coinbase - $10 to $30 of cryptocurrency',
    link: 'https://www.coinbase.com/join/malken_4',
    linkDesc: 'Coinbase signup',
    desc: "No purchase needed. We'll both earn $10 after you join Coinbase.",
    desc4: "If you want to purchase crypto for low fees, you should use your same account at their <a href='https://pro.coinbase.com/'>sister \"pro\" site</a> or elsewhere for even lower fees. All crypto except Bitcoin (and maybe Monero) are speculative and should not be considered as an investment or hedge against the mighty US Dollar.",
    pros: [
      'Free $10',
      'US Company. One of oldest crypto companies at over 10 years',
      'Occasional free crypto for completing easy quiz',
    ],
    cons: [
      'Govt ID required',
      'High fees for purchasing crypto',
      '',
    ],
    lastUpdated: '2022',
  },
  {
    title: 'Slips - Free State Lottery Tickets',
    desc: 'Free lottery tickets if you are located in NY, FL, CA, TX, or DE, from the comfort of your home.',
    link: 'https://slips.com/invite?code=3c20',
    desc2:
      'No purchase, payment method, or address needed to get the free tickets. Only your phone number and device location is needed.',
    desc3:
      'After adding your email, you can use promo code MYEMAIL.' +
      ' There are additional promo codes, but they may expire soon and you are limited to using one per day.' +
      ' In order of most recent to oldest: GETFREE, FIRSTTIME, FREETICKET, JACKPOT, FREE, HOLIDAYS.' +
      ' You can check for more codes here later or the "Get This Code" buttons at' +
      ` <a target="_blank" href="https://slips.knoji.com/promo-codes" target="_blank">knoji</a>` +
      ` or the "Show Promo Code" buttons at <a target="_blank" href="https://dealspotr.com/promo-codes/slips.com" target="_blank">dealspotr</a>`,
    desc4:
      'In Dec 2022, I was able to get a total of 7 free tickets.' +
      " If you want to purchase more lottery tickets (you shouldn't), there are fees.",
    linkDesc: 'Slips signup',
    pros: ['Free tickets', 'Relatively quick updates to show your ticket number prior to drawing', '', ''],
    cons: [
      'Phone number required. Need to opt out of their occasional spam text',
      'Share with friend expires quickly and requires multiple input',
      '$10 minimum to cash out',
      'New company',
    ],
  }
];

export const referrals: referral[] = [
  ...topReferrals,
  {
    title: 'Current - 4% on 6k',
    desc: "FDIC-insured bank. We'll both earn $50 after you join Current and complete a $200 direct deposit.",
    desc2:
      "You can sign up on their website but you'll need to download their mobile app to transfer money." +
      ' They don\'t have a straightforward saving account so you\'ll want to setup automatic transfers from 3 "savings pods"' +
      "to your new Current checking account. Then, from your external bank, you'll need to setup automatic transfers to withdraw from that checking account.",
    link: 'https://current.onelink.me/UBJ6/5wzayizi',
    linkDesc: 'Current signup (Enter code: QESBBV925)',
    pros: ['$50 bonus for a single $200 direct deposit', '4% APY', ''],
    cons: [
      'Mobile app only',
      '$6k limit',
      'Another bank must be used for scheduling repeating transfers',
    ],
    lastUpdated: 'Jan 2023',
  },
];
// auntie anne johnnc69832