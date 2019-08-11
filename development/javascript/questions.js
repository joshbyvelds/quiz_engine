// Current Version 3;
var question_categorys = [
    "Unknown",
    "Rights and Responsibilities of Citizenship",
    "Government Positions (Federal)",
    "Government Positions (Provincial)",
    "Government Positions (Local)"
];

var QUESTIONS = [
    {
        "ID": 0,
        "Category": 1,
        "Question": "Name one source of Canadian law.",
        "Answers": [
            "United States common law",
            "Irish common law",
            "The military code of France",
            "English common law",
        ],
        "Correct": 3,
    },

    {
        "ID": 1,
        "Category": 1,
        "Question": "What is \"Magna Carta\"?",
        "Answers": [
            "The Great Charter of Freedoms",
            "A map of the world in 1215",
            "The constitution of Ireland",
            "The Great Code of England.",
        ],
        "Correct": 0,
    },

    {
        "ID": 2,
        "Category": 1,
        "Question": "The Great Charter of Freedoms was signed in:",
        "Answers": [
            "France",
            "Canada",
            "Ireland",
            "England",
        ],
        "Correct": 3,
    },

    {
        "ID": 3,
        "Category": 1,
        "Question": "When was the Magna Carta signed?",
        "Answers": [
            "1615",
            "1425",
            "1215",
            "1649",
        ],
        "Correct": 2,
    },

    {
        "ID": 4,
        "Category": 1,
        "Question": "What does the Great Charter of Freedom include?",
        "Answers": [
            "Freedom of conscience and religion",
            "Employment rights",
            "Aboriginal Peoples' rights",
            "Freedom from taxes",
        ],
        "Correct": 0,
    },

    {
        "ID": 5,
        "Category": 1,
        "Question": "What is \"Habeas corpus\"?",
        "Answers": [
            "The right to challenge unlawful detention by the state",
            "The right to live and work anywhere in Canada",
            "The right to speak freely",
            "The right for peaceful assembly",
        ],
        "Correct": 0,
    },

    {
        "ID": 6,
        "Category": 1,
        "Question": "When was the Constitution of Canada amended to include the Charter of Rights and Freedoms?",
        "Answers": [
            "1902",
            "1982",
            "1859",
            "1949",
        ],
        "Correct": 1,
    },

    {
        "ID": 7,
        "Category": 1,
        "Question": "Who proclaimed the amended Constitution of Canada in 1982?",
        "Answers": [
            "The Prime Minister",
            "The Senate",
            "Queen Elizabeth II",
            "The people of Canada",
        ],
        "Correct": 2,
    },

    {
        "ID": 8,
        "Category": 1,
        "Question": "What are the two principles upon which Canada is founded?",
        "Answers": [
            "The supremacy of God and freedom of speech",
            "The supremacy of God and the rule of law",
            "Mobility right and the rule of law",
            "The supremacy of law and the rule of God",
        ],
        "Correct": 1,
    },

    {
        "ID": 9,
        "Category": 1,
        "Question": "With which words does the Canadian Charter of Rights and Freedoms begin?",
        "Answers": [
            "\"Canada is a free country and home of the braves\"",
            "\"Oh Canada! Our home and native land!\"",
            "\"Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law\"",
            "\"Canadian citizens have rights and responsibilities\"",
        ],
        "Correct": 2,
    },

    {
        "ID": 10,
        "Category": 1,
        "Question": "What are \"mobility rights\"?",
        "Answers": [
            "Canadians have freedom of speech",
            "Canadians can enter and leave the country freely, and apply for a passport",
            "Canadians can live and work anywhere they choose in Canada, enter/leave the country freely, and apply for a passport",
            "Canadians can live and work anywhere they choose in Canada, and enter/leave the country freely",
        ],
        "Correct": 2,
    },

    {
        "ID": 11,
        "Category": 1,
        "Question": "Who can enter and leave the country freely without time constraints?",
        "Answers": [
            "Canadian citizens",
            "Canadian citizens and landed immigrants",
            "British citizens",
            "Commonwealth citizens",
        ],
        "Correct": 0,
    },

    {
        "ID": 12,
        "Category": 1,
        "Question": "Which three rights are included in the Canadian Charter of Rights and Freedoms?",
        "Answers": [
            "Mobility rights, Aboriginal Peoples' rights, and official language rights",
            "Freedom of expression rights, property rights and fair trial rights",
            "Employment rights, mobility rights, and freedom rights",
            "Aboriginal Peoples' rights, voting rights and official language rights",
        ],
        "Correct": 0,
    },

    {
        "ID": 13,
        "Category": 1,
        "Question": "French and English do not have equal status in Parliament and throughout the government",
        "Answers": [
            "True",
            "False",
        ],
        "Correct": 1,
    },

    {
        "ID": 14,
        "Category": 1,
        "Question": "Canadians work hard to respect:",
        "Answers": [
            "Marxism",
            "Individualism",
            "Capitalism",
            "Pluralism",
        ],
        "Correct": 3,
    },

    {
        "ID": 15,
        "Category": 1,
        "Question": "What is a fundamental characteristic of the Canadian heritage and identity?",
        "Answers": [
            "Hockey",
            "Maple Syrup",
            "Multiculturalism",
            "Habeas Corpus",
        ],
        "Correct": 2,
    },

    {
        "ID": 16,
        "Category": 1,
        "Question": "What are three responsibilities of Canadian citizenship?",
        "Answers": [
            "Being loyal to Canada, recycling all waste, and serving in the Canadian Forces.",
            "Obeying the law, taking responsibility for oneself and one's family, and serving on a jury",
            "Learning both official languages, voting in elections, and belonging to a union",
            "Buying Canadian products, owning your own house, and using less water",
        ],
        "Correct": 1,
    },

    {
        "ID": 17,
        "Category": 1,
        "Question": "When called to do so, serving on a jury is:",
        "Answers": [
            "A legal requirement",
            "An option",
        ],
        "Correct": 0,
    },

    {
        "ID": 18,
        "Category": 1,
        "Question": "There is no compulsory military service in Canada",
        "Answers": [
            "True",
            "False",
        ],
        "Correct": 0,
    },

    {
        "ID": 19,
        "Category": 1,
        "Question": "What is a noble way to contribute to Canada and an excellent career choice?",
        "Answers": [
            "Learn both official languages",
            "Serve on a jury",
            "Belong to a union",
            "Serve in the regular Canadian Forces",
        ],
        "Correct": 3,
    },

    {
        "ID": 20,
        "Category": 0,
        "Question": "In Canada's justice system what does \"presumption of innocence\" mean?",
        "Answers": [
            "Everyone is guilty until proven innocent",
            "Guilt is decided by public opinion",
            "Innocence is decided by public opinion",
            "Everyone is innocent until proven guilty",
        ],
        "Correct": 3,
    },

    {
        "ID": 21,
        "Category": 0,
        "Question": "What does the Canadian flag look like?",
        "Answers": [
            "Red and white with provincial emblems.",
            "Red and white with a beaver.",
            "White with a red border on each end and a red maple leaf in the centre.",
            "Red with a white maple leaf.",
        ],
        "Correct": 2,
    },

    {
        "ID": 22,
        "Category": 0,
        "Question": "Which animal is an official symbol of Canada?",
        "Answers": [
            "The moose",
            "The hawk",
            "The beaver",
            "The deer",
        ],
        "Correct": 2,
    },

    {
        "ID": 23,
        "Category": 0,
        "Question": "What is the capital city of Canada?",
        "Answers": [
            "Ottawa",
            "Toronto",
            "Montreal",
            "Hull",
        ],
        "Correct": 0,
    },

    {
        "ID": 24,
        "Category": 0,
        "Question": "One third of all Canadians live in which province?",
        "Answers": [
            "Quebec.",
            "Ontario.",
            "Northwest Territories.",
            "Manitoba.",
        ],
        "Correct": 1,
    },

    {
        "ID": 25,
        "Category": 0,
        "Question": "What are the three main types of industry in Canada?",
        "Answers": [
            "Natural resources, tourism and service industries.",
            "Tourism, services and manufacturing.",
            "Natural resources, tourism and manufacturing.",
            "Natural resources, manufacturing and services.",
        ],
        "Correct": 3,
    },

    {
        "ID": 26,
        "Category": 0,
        "Question": "Which party is the Official Opposition at the federal level?",
        "Answers": [
            "The New Democratic Party.",
            "The Liberal Party.",
            "The Independent Party.",
            "The Conservative Party.",
        ],
        "Correct": 3,
    },

    {
        "ID": 27,
        "Category": 0,
        "Question": "Give an example of where English and French have equal status in Canada.",
        "Answers": [
            "In schools.",
            "In the workplace.",
            "In the Parliament of Canada.",
            "At City Hall.",
        ],
        "Correct": 2,
    },

    {
        "ID": 28,
        "Category": 0,
        "Question": " What should you do if you do not receive a voter information card telling you when and where to vote?",
        "Answers": [
            "Go to the police station.",
            "Call your Member of Parliament.",
            "Assume you cannot vote.",
            "Call Elections Canada or visit their website.",
        ],
        "Correct": 3,
    },

    {
        "ID": 29,
        "Category": 0,
        "Question": "Which of the following statements about residential schools is NOT true?",
        "Answers": [
            "The federal government placed many Aboriginal children in residential schools to educate and assimilate them into mainstream Canadian culture.",
            "The schools were poorly funded and inflicted hardship on the students.",
            "The schools were welcomed by the Aboriginal people.",
            "Aboriginal language and cultural practices were mostly prohibited.",
        ],
        "Correct": 2,
    },

    {
        "ID": 30,
        "Category": 0,
        "Question": "Who are the Acadians?",
        "Answers": [
            "Aboriginal people of the arctic.",
            "French-speaking Catholics living in Ontario.",
            "The descendants of French colonists who began settling in what are now the Maritime provinces in 1604.",
            "English speaking refugees who settled in Louisiana."
        ],
        "Correct": 2,
    },

    {
        "ID": 31,
        "Category": 0,
        "Question": "Which of the following sentences best describes the War of 1812?",
        "Answers": [
            "Napoleon's fleet was defeated by the Royal Navy in the war.",
            "The USA became independent from the British Empire after the war.",
            "The USA invaded Canada and was defeated, which ensured that Canada would remain independent of the United States.",
            "Canada joined the United States after the war.",
        ],
        "Correct": 2,
    },

    {
        "ID": 32,
        "Category": 0,
        "Question": "Which of the following is NOT a feature of Canada's system of government?",
        "Answers": [
            "A federal state.",
            "Parliamentary democracy.",
            "Constitutional Monarchy.",
            "Dictatorship."
        ],
        "Correct": 3,
    },

    {
        "ID": 33,
        "Category": 0,
        "Question": "What is the significance of the discovery of insulin by Sir Frederick Banting and Charles Best? ",
        "Answers": [
            "Insulin is a hormone that permits you to eat anything you wish.",
            "Insulin has saved 16 million lives worldwide.",
            "Discovering insulin opened the doors to more discoveries.",
            "Discovering insulin made Drs. Banting and Best famous."
        ],
        "Correct": 1,
    },

    {
        "ID": 34,
        "Category": 0,
        "Question": "Which province is the main producer of pulp and paper and hydro-electricity?",
        "Answers": [
            "Quebec",
            "Ontario",
            "British Columbia",
            "Manitoba",
        ],
        "Correct": 0,
    },

    {
        "ID": 35,
        "Category": 0,
        "Question": "How is a Cabinet Minister chosen?",
        "Answers": [
            "By the Queen.",
            "By the voters.",
            "By other Cabinet Ministers.",
            "By the Prime Minister",
        ],
        "Correct": 3,
    },

    {
        "ID": 36,
        "Category": 0,
        "Question": "Canada has three territories and how many provinces?",
        "Answers": [
            "13",
            "10",
            "3",
            "5",
        ],
        "Correct": 1,
    },

    {
        "ID": 37,
        "Category": 0,
        "Question": "Name two responsibilities of the provincial and territorial government.",
        "Answers": [
            "Citizenship and Foreign Policy",
            "Health and Education",
            "Defense and Currency",
            "Criminal Law and Interprovincial Trade,
        ],
        "Correct": 1,
    },

    {
        "ID": 38,
        "Category": 0,
        "Question": "What was the \"Underground Railroad\"?",
        "Answers": [
            "An anti-slavery network that helped thousands of slaves escape the United States and settle in Canada",
            "A railroad through the Rockies that was mainly through mountain tunnels",
            "A network fur traders used to transport beaver pelts to the United States",
            "The first underground subway tunnel in Toronto",
        ],
        "Correct": 0,
    },

    {
        "ID": 39,
        "Category": 2,
        "Question": "Who is Canada\'s head of state?",
        "Answers": [
            "Queen Elizabeth II",
            "Steven Harper",
            "Justin Trudeau",
            "Julie Payette",
        ],
        "Correct": 0,
    },

    {
        "ID": 40,
        "Category": 2,
        "Question": "The name of the representative of the Queen of Canada, the Governor General, is?",
        "Answers": [
            "Julie Payette",
            "Georges Vanier",
            "Michaëlle Jean",
            "Adrienne Clarkson",
        ],
        "Correct": 0,
    },

    {
        "ID": 41,
        "Category": 2,
        "Question": "The Head of Government, the Prime Minister, is?",
        "Answers": [
            "Justin Trudeau",
            "Steven Harper",
            "Andrew Scheer",
            "Jagmeet Singh",
        ],
        "Correct": 0,
    },

    {
        "ID": 42,
        "Category": 2,
        "Question": "The name of the political party in power is?",
        "Answers": [
            "Conservative",
            "Liberal",
            "New Democratic Party",
            "Green",
        ],
        "Correct": 1,
    },

    {
        "ID": 43,
        "Category": 2,
        "Question": "The name of the Leader of the Opposition is?",
        "Answers": [
            "Andrew Scheer",
            "Jagmeet Singh",
            "Yves-François Blanchet",
            "Elizabeth May",
        ],
        "Correct": 0,
    },

    {
        "ID": 44,
        "Category": 2,
        "Question": "The name of the party representing Her Majesty’s Loyal Opposition is?",
        "Answers": [
            "Conservative",
            "Bloc Québécois",
            "New Democratic Party",
            "Green",
        ],
        "Correct": 0,
    },

    {
        "ID": 45,
        "Category": 2,
        "Question": "Who is NOT a real opposition party / leader?",
        "Answers": [
            "Conservative (Andrew Scheer)",
            "Bloc Québécois(Yves-François Blanchet)",
            "New Democratic Party (Jagmeet Singh)",
            "Green (Elizabeth May)",
            "Canadian Communist Party (Alexi Volkoff)"
        ],
        "Correct": 3,
    },

    {
        "ID": 46,
        "Category": 2,
        "Question": "My member of Parliament (MP) in Ottawa is?",
        "Answers": [
            "Anita Vandenbeld",
            "Arif Virani",
            "David McGuinty",
            "Mona Fortier",
        ],
        "Correct": 0,
    },

    {
        "ID": 47,
        "Category": 2,
        "Question": "My federal electoral district is called?",
        "Answers": [
            "Ottawa West—Nepean",
            "Ottawa Centre",
            "Ottawa South",
            "Ottawa—Vanier",
        ],
        "Correct": 0,
    },

    {
        "ID": 48,
        "Category": 5,
        "Question": "The name of the head of the municipal government (mayor or reeve) is?",
        "Answers": [
            "Jim Watson",
            "Eddie Edwards",
            "Anita Vandenbeld",
            "Doug Ford",
        ],
        "Correct": 0,
    },


    {
        "ID": 49,
        "Category": 4,
        "Question": "The representative of the Queen in my province, the Lieutenant Governor, is?",
        "Answers": [
            "Elizabeth Dowdeswell",
            "Henry William Stisted",
            "Hillary Mary Weston",
            "David Charles Onley",
        ],
        "Correct": 0,
    },

    {
        "ID": 50,
        "Category": 4,
        "Question": "The Head of Government (the Premier) is?",
        "Answers": [
            "Doug Ford",
            "Justin Trudeau",
            "Elizabeth Dowdeswell",
            "Anita Vandenbeld",
        ],
        "Correct": 0,
    },

    {
        "ID": 51,
        "Category": 5,
        "Question": "The name of the municipality where I live is?",
        "Answers": [
            "City of Ottawa",
            "North Dundas",
            "Toronto",
            "Ontario",
        ],
        "Correct": 0,
    },


    {
        "ID": 52,
        "Category": 4,
        "Question": "The name of the provincial party in power is?",
        "Answers": [
            "Conservative",
            "Liberal",
            "New Democratic Party",
            "Green",
        ],
        "Correct": 0,
    },

    {
        "ID": 53,
        "Category": 4,
        "Question": "Who is NOT a real provincial opposition party / leader",
        "Answers": [
            "Green Party of Ontario (Mike Schreiner)",
            "Ontario New Democratic Party (Andrea Horwath)",
            "Ontario Liberal Party (John Fraser)",
            "Ontatio Nazi Party (Bill Edwards)",
        ],
        "Correct": 3,
    },


    {
        "ID": 54,
        "Category": 4,
        "Question": "My provincial representative is?",
        "Answers": [
            "Jeremy Roberts (PC)",
            "Sara Singh (NDP)",
            "Sam Oosterhoff (PC)",
            "John Fraser (LIB)",
        ],
        "Correct": 0,
    },

    {
        "ID": 55,
        "Category": 5,
        "Question": "The name of the Commissioner, who represents the federal government in my territory, is?",
        "Answers": [
            "Jeremy Roberts",
            "Doug Ford",
            "Justin Trudeau",
            "N/A - Ontario does not have one",
        ],
        "Correct": 3,
    },


    // {
    //     "ID": #,
    //     "Category": 0,
    //     "Question": "",
    //     "Answers": [
    //         "",
    //         "",
    //         "",
    //         "",
    //     ],
    //     "Correct": #,
    // }
];