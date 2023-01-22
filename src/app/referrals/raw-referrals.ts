import { referral } from "./referral.interface";

export const referrals: referral[] = [
    {title: "Slips - Free State Lottery Tickets",
    desc: "Free lottery tickets if you are located in NY, FL, CA, TX, or DE.",
    link: "https://slips.com/invite?code=3c20",
    desc2: "No payment method or address needed to get the free tickets. Your phone number and device location is required.",
    desc3: "After adding your email, you can use promo code MYEMAIL." +
    " There are additional promo codes, but they may expire soon and you are limited to using one per day." +
    "In order of latest: GETFREE, FIRSTTIME, FREETICKET, JACKPOT, FREE, HOLIDAYS." + 
    "You can check for more codes here later or the \"Get This Code\" buttons at https://slips.knoji.com/promo-codes" + 
    " or https://dealspotr.com/promo-codes/slips.com/",
    desc4: "In Dec 2022, I was able to get a total of 7 free tickets." +
    " If you want to purchase more lottery tickets (you shouldn't), there are fees.",
    linkDesc: "Slips signup",
    pros:["Free tickets", "Quick updates to show your ticket number","",""],
    cons:["New company","Phone number required","$10 minimum to cash out","Share with friend expires quickly"]
    },
    {
    title: "Current - 4% on 6k",
    desc: "FDIC-insured bank. We'll both earn $50 after you join Current and complete a $200 direct deposit.",
    desc2: "You can sign up on their website but you'll need to download their mobile app to transfer money." + 
    " They don't have a straightforward saving account so you'll want to setup automatic transfers from 3 \"savings pods\"" +  
    "to your new Current checking account. Then, from your external bank, you'll need to setup automatic transfers to withdraw from that checking account.",
    link: "https://current.onelink.me/UBJ6/5wzayizi",
    linkDesc: "Current signup (Enter code: QESBBV925)",
    pros: ["$50 bonus for a single $200 direct deposit","4% APY",  ""],
    cons: ["Mobile app only", "$6k limit", "Another bank must be used for scheduling repeating transfers"],
    lastUpdated: "Jan 2023"
    },
    {
        title: "Coinbase - $10 to $30 of cryptocurrency",
        link: "https://www.coinbase.com/join/malken_4",
        linkDesc: "Coinbase signup",
        desc: "No purchase needed. We'll both earn $10 after you join Coinbase.",
        pros: ["Free $10", "US Company. One of oldest crypto companies at over 10 years", "Occasional free crypto for completing easy quiz"],
        cons: ["If you want to purchase more crypto, you can find lower fees elsewhere","Govt ID required","" ]
    }
    // {
    //     title:"Juno"
    // },


]