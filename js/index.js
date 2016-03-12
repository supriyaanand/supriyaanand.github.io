angular.module('webPortfolioApp', ['ui.bootstrap']);
function projectsCtrl($scope) {

    $scope.projects = [
        {title: 'AI Game Playing Agent',
            desc: "AI game playing agent that uses Adversarial search techniques Minimax, Minimax with Alpha Beta Pruning and Greedy Best First Search to play a version of the classic Othello game.",
            open: true,
            demoLinkPresent: false,
            gitHubLinkPresent: false,
            stack: ["Python"]
        },
        {title: 'AI Inference System for First Order Logic',
            desc: "Inference system with Backward Chaining to determine entailment of definite clauses given a First Order Logic Knowledge Base.",
            open: true,
            demoLinkPresent: false,
            gitHubLinkPresent: false,
            stack: ["Python"]
        },
        {title: 'Grasshopper',
            desc: "The Grasshopper virtual phone system helps entrepreneurs sound more professional and stay connected from anywhere. Features include toll free and local numbers, custom greetings, multiple extensions for employees, call forwarding to any phone anywhere in the world, voicemail to email, and much more. Unlike a traditional phone system, Grasshopper is managed all online and in the cloud - there's no hardware to purchase and no software to install.",
            open: false,
            demoLink: "http://grasshopper.com",
            demoLinkPresent: true,
            gitHubLinkPresent: false,
            stack: ["Ruby on Rails", "RSpec", "AngularJS"]
        },
        {title: 'GoCalendar',
            desc: 'A personal calendar on the cloud. Can also be used by enterprises that operate out of large offices to book conference rooms when scheduling meetings.',
            open: false,
            gitHubLink: "http://github.com/supriyaanand/eventCalendar",
            demoLinkPresent: true,
            gitHubLinkPresent: true,
            demoLink: "http://evcalendar.herokuapp.com/",
            stack: ["Ruby on Rails", "AngularJS"]
        },
        {title: 'TagSent',
            desc: 'Sentiment analysis on book reviews',
            open: false,
            gitHubLink: "http://github.com/supriyaanand/tagSent",
            demoLinkPresent: false,
            gitHubLinkPresent: true,
            stack: ["Python"]
        },
        {title: 'Resumér',
            desc: 'Automatic text summarization tool using statistical approaches coupled with an unsupervised learning algorithm.',
            open: false,
            gitHubLink: "https://github.com/supriyaanand/resumer",
            demoLinkPresent: false,
            gitHubLinkPresent: true,
            stack: ["Python"]
        },
        {title: 'FBViz',
            desc: 'A personalized recommender system using data mined from Facebook. Graph visualization with Gephi. Get the best person in your network to recommend books/movies/musicians and suggest pages to follow!',
            open: false,
            gitHubLink: "https://github.com/supriyaanand/FBViz",
            demoLinkPresent: false,
            gitHubLinkPresent: true,
            stack: ["Python"]
        },
        {title: 'Language Identification in multilingual search queries',
            desc: 'Recognize Indian languages in multilingual search queries leveraging concepts from Linguistics, Phonetics and specific patterns in transliterated forms of query tokens.',
            open: false,
            gitHubLink: "https://github.com/supriyaanand/MachineTransliteration",
            demoLinkPresent: false,
            gitHubLinkPresent: true,
            stack: ["Python"]
        },
        {title: 'Weather Forecast',
            desc: 'A responsive website developed to forecast weather conditions using APIs from GoogleMaps Geocoding, Forecast.io and OpenWeatherMap. Users can also share the post on Facebook. An Android app too was developed with similar functionality. Map functionality was implemented using the Aeris Weather SDK with the option for Facebook shares implemented via the Facebook SDK.',
            open: false,
            gitHubLink: "http://github.com/supriyaanand/weather-forecast-webpage",
            demoLinkPresent: true,
            gitHubLinkPresent: true,
            demoLink: "http://weather-ahead.herokuapp.com/",
            stack: ["HTML", "CSS", "Bootstrap", "jQuery"]
        },
    ];
}

function workExCtrl($scope) {

    $scope.workex = [
        {title: 'Graduate Associate',
            where: "Office of Institutional Research, University of Southern California",
            when: "January 2016 - Present",
            desc: ["Design and development of a text analysis framework for course evaluations"],
        },
        {title: 'Associate Software Developer',
            where: "Mavenhive Technologies",
            when: "Feb 2015 - June 2015",
            desc: ["Full stack web development for the Grasshopper cloud telephony service on the Rails stack with an AngularJS frontend",
                    "Designed and implemented a Proof-of-Concept for an in-house Customer Relationship Management Tool",
                    "Implemented RESTful APIs required to aggregate data for the CRM product from existing components"]
        },
        {title: 'Software Development Engineer in Test',
            where: "Akamai Technologies",
            when: "July 2013 - September 2014",
            desc: ["Integrated cross language test frameworks with the Akamai HD Automation framework",
                    "Incorporated a code coverage metrics module into the test framework to identify and target un-tested code which resulted in enhanced code coverage",
                    "Designed and implemented test plans to validate key features of products across both Live and Video-on-Demand Media Delivery solutions",
                    "Collaborated with three teams numbering twenty plus to incorporate continuous integration model of development, integration of static code analyzers Coverity, Cppcheck and Jenkins CI server which resulted in immediate bug catches and highly reduced regression cycle",
                    "Analyzed and reported performance bottlenecks for a large-scale distributed network",
                    "Extensively trained team members apprising them of quality initiatives. The training sessions have been digitally recorded for the benefit of new employees"
                    ]
        },
        {title: 'Intern',
            where: "Akamai Technologies",
            when: "Feb 2013 - June 2013",
            desc: ["Designed and developed a keyword driven code generator for the generation of test scripts for use with the Akamai HD Automation Framework"]
        },
        {title: 'Intern',
            where: "Gavista Tech",
            when: "Nov 2012 - Dec 2012",
            desc: ["Engineered a cloud based organizer for the legal community with modules for reminders and notifications"]
        },
    ];
}

function educationCtrl($scope) {
    $scope.schools = [
        {   what: 'M.S in Computer Science',
            where: "University of Southern California",
            when: "July 2015 - Present",
            desc: "Specializing in Natural Language Processing, Information Retrieval and Data Mining",
        },
        {   what: 'B.E in Information Science',
            where: "B M S College of Engineering, India",
            when: "Sept 2009 - June 2013",
            desc: "",
        },
    ];    
}