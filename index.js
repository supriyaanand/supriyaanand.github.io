angular.module('webPortfolioApp', ['ui.bootstrap']);
function projectsCtrl($scope) {

    $scope.projects = [
        {title: 'Grasshopper',
            desc: "The Grasshopper virtual phone system helps entrepreneurs sound more professional and stay connected from anywhere. Features include toll free and local numbers, custom greetings, multiple extensions for employees, call forwarding to any phone anywhere in the world, voicemail to email, and much more. Unlike a traditional phone system, Grasshopper is managed all online and in the cloud - there's no hardware to purchase and no software to install.",
            open: true
        },
        {title: 'GoCalendar',
            desc: 'A personal calendar on the cloud. Can also be used by enterprises that operate out of large offices to book conference rooms when scheduling meetings.',
            open: false
        },
        {title: 'TagSent',
            desc: 'Sentiment analysis on book reviews',
            open: false
        },
        {title: 'Resumér',
            desc: 'Automatic text summarization tool using statistical approaches coupled with an unsupervised learning algorithm.',
            open: false
        },
        {title: 'FBViz',
            desc: 'A personalized recommender system using data mined from Facebook. Graph visualization with Gephi. Get the best person in your network to recommend books/movies/musicians and suggest pages to follow!',
            open: false
        },
        {title: 'Language Identification in multilingual search queries',
            desc: 'Recognize Indian languages in multi􏰀 lingual search queries leveraging concepts from Linguistics, Phonetics and specific patterns in transliterated forms of query tokens.',
            open: false
        },
        {title: 'Weather Forecast',
            desc: 'A responsive website and Android app forecasting weather for upto the next seven days using Forecast.io API.',
            open: false
        },
    ];
}