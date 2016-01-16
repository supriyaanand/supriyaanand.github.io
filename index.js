angular.module('webPortfolioApp', ['ui.bootstrap']);
function projectsCtrl($scope) {

    $scope.projects = [
        {title: 'Grasshopper',
            desc: "The Grasshopper virtual phone system helps entrepreneurs sound more professional and stay connected from anywhere. Features include toll free and local numbers, custom greetings, multiple extensions for employees, call forwarding to any phone anywhere in the world, voicemail to email, and much more. Unlike a traditional phone system, Grasshopper is managed all online and in the cloud - there's no hardware to purchase and no software to install.",
            open: true,
            link: "http://grasshopper.com"
        },
        {title: 'GoCalendar',
            desc: 'A personal calendar on the cloud. Can also be used by enterprises that operate out of large offices to book conference rooms when scheduling meetings.',
            open: false,
            link: "http://evcalendar.herokuapp.com/"
        },
        {title: 'TagSent',
            desc: 'Sentiment analysis on book reviews',
            open: false,
            link: "http://github.com/supriyaanand/tagSent"
        },
        {title: 'Resumér',
            desc: 'Automatic text summarization tool using statistical approaches coupled with an unsupervised learning algorithm.',
            open: false,
            link: "https://github.com/supriyaanand/resumer"
        },
        {title: 'FBViz',
            desc: 'A personalized recommender system using data mined from Facebook. Graph visualization with Gephi. Get the best person in your network to recommend books/movies/musicians and suggest pages to follow!',
            open: false,
            link: "https://github.com/supriyaanand/FBViz"
        },
        {title: 'Language Identification in multilingual search queries',
            desc: 'Recognize Indian languages in multilingual search queries leveraging concepts from Linguistics, Phonetics and specific patterns in transliterated forms of query tokens.',
            open: false,
            link: "https://github.com/supriyaanand/MachineTransliteration"
        },
        {title: 'Weather Forecast',
            desc: 'A responsive website developed to forecast weather conditions using APIs from GoogleMaps Geocoding, Forecast.io and OpenWeatherMap. Users can also share the post on Facebook. An Android app too was developed with similar functionality. Map functionality was implemented using the Aeris Weather SDK with the option for Facebook shares implemented via the Facebook SDK.',
            open: false,
            link: "http://weather-ahead.herokuapp.com/"
        },
    ];
}