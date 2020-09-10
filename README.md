# Colorado4NoCops
Twilio App to help direct Denver callers to appropriate help services without the use of 911


It basically just let's you navigate this table, text yourself info, and call these services:
```
  "Mental Health": [
        {
            name: "Colorado Crisis Services",
            description: "Mental health and substance use crisis phone/text line",
            phone: "1-844-493-8255",
            text: "38255",
            hours: "24 7",
            website: "http://coloradocrisisservices.org"
        },
        {
            name: "Denver Health Mobile Crisis",
            description: "Mobile crisis unit for mental health and substance use crisis",
            phone: "1-844-493-8255",
            hours: "24 7"
        },
        {
            name: "Mental Health Center of Denver",
            description: "Mental health and substance use crisis phone/text line",
            phone: "1-303-504-7900",
            hours: "Monday through Friday"
        },
        {
            name: "TransLifeline",
            description: "National hotline run by trans folks for trans folks in crisis",
            phone: "877-565-8860",
            hours: "24 7",
            website: "http://translifeline.org"
        },
    ],
    "Substance Use": [
        {
            name: "Harm Reduction Action Center",
            description: "Syringe exchange; Narcan/Naloxone",
            phone: "1-303-572-7800",
            hours: "Monday through Friday",
            website: "http://harmreductionactioncenter.org"
        },
        {
            name: "Access Point",
            description: "Syringe exchange; Narcan/Naloxone; Fentanyl strips",
            phone: "1-303-837-1501",
            hours: "Call for hours",
            website: "https://www.facebook.com/accesspointdenver/"
        },
        {
            name: "LifePoint Denver",
            description: "Syringe exchange/delivery; Narcan/Naloxone; Fentanyl strips",
            phone: "1-720-385-6898",
            text: "1-720-385-6898",
            hours: "Call for hours",
            website: "http://instagram.com/lifepointdenver;"
        },
    ],
    "Domestic Violence and Sexual Assault": [
        {
            name: "The Blue Bench",
            description: "Advocacy, case mangement, and free-low cost therapy to survivors of sexual assault",
            phone: "1-303-322-7273;",
            hours: "24 7",
            website: "http://thebluebench.org"
        },
        {
            name: "Safehouse Denver",
            description: "Domestic violence services including emergency shelter, counseling and advocacy center, and extended stay program",
            phone: "1-303-318-9989;",
            hours: "24 7",
            website: "http://safehouse-denver.org"
        },
        {
            name: "Rose Andom Center",
            description: "Domestic violence case management, advocacy, and civil or criminal legal support",
            phone: "1-720-337-4400",
            hours: "Monday through Friday",
            website: "http://roseandomcenter.org/"
        },
        {
            name: "The Initiative",
            description: "Advocacy, legal support, and community referrals for individuals with disabilities who have experienced abuse",
            phone: "1-303-839-5510",
            text: "1-720-503-9580",
            hours: "Monday through Friday",
            website: "https://theinitiativecolorado.org"
        },
    ],
    "Homelessness": [
        {
            name: "St. Francis Day Center",
            description: "Drop in center with storage, case management, hygiene, health clinic",
            phone: "1-303-297-1576",
            hours: "Monday through Friday, 6am to 6pm",
            website: "http://www.sfcdenver.org"
        },
        {
            name: "The Gathering Place",
            description: "Drop-in center for women, transgender individuals, and their children; meals, case management, hygiene",
            phone: "1-303-321-4198",
            hours: "Monday through Friday",
            website: "http://tgpdenver.org"
        },
        {
            name: "Urban Peak Youth Shelter",
            description: "Shelter for youth (15-21); Meals, case management, housing referrals",
            phone: "1-303-974-2908",
            hours: "24 7",
            website: "http://urbanpeak.org"
        },
        {
            name: "Urban Peak Youth Drop in Center",
            description: "Drop-in center for youth (18-25); Meals, case management, daily programming, and referrals",
            phone: "1-303-974-2900",
            hours: "Monday through Friday",
            website: "http://urbanpeak.org"
        },
        {
            name: "Stout Street Health Center/Colorado Coalition for the Homeless",
            description: "Mental, physical, dental, and vision health; connections to case management and housing",
            phone: "1-303-293-2220",
            hours: "Monday through Friday",
            website: "http://coloradocoalition.org"
        },
        {
            name: "HOPE Drop in Center",
            description: "Drop-in center for HIV+ individuals who are experiencing homelessness; food, hygiene, laundry,",
            phone: "1-303-832-3354",
            hours: "Monday through Friday",
            website: "http://instagram.com/hopeindenver"
        }
    ],
    "Food Access": [
        {
            name: "Hunger Free Colorado Hotline",
            description: "Hotline for public and private food assistance in the callers area",
            phone: "1-720-382-2920",
            hours: "Monday through Friday",
            website: "https://www.hungerfreecolorado.org/"
        },
        {
            name: "Metro Caring",
            description: "Food bank with access to case management",
            phone: "1-303-860-7200",
            hours: "Monday through Friday",
            website: "https://www.metrocaring.org/"
        },
        {
            name: "SAME Cafe",
            description: "Donation based meals, can volunteer time for meal; Vegetarian/vegan friendly",
            phone: "1-720-530-6853",
            hours: "Monday through Saturday, 11am to 2:30pm",
        },
    ],
    "Comprehensive Resources": [
        {
            name: "Mile High United Way",
            description: "Multilingual resource support including food, clothing, homelessness, housing, mental health, substance use, and immigration",
            phone: "211",
            hours: "24 7",
            website: "https://www.211colorado.org/"
        },
        {
            name: "Aunt Bertha",
            description: "National database for local resources like food, homelessness, legal aid, employment, education, and more",
            phone: "1-303-860-7200",
            website: "http://auntbertha.com/"
        },
        {
            name: "Denver Public Schools",
            description: "Support with food, homelessness, utilities, and mental/physical health",
            phone: "1-720-423-3054",
        },
    ]
    ```
