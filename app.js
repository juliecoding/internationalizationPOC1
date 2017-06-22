var app = angular.module('app', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'german'
  });
  $translateProvider.translations('de', {
    TITLE: 'Hallo',
    FOO: 'Das ist ein Paragraph.',
    BUTTON_LANG_EN: 'englisch',
    BUTTON_LANG_DE: 'deutsch'
  });
  $translateProvider.translations('ru', {
    TITLE: 'Zdravstvuytye',
    FOO: 'Eto -- paragraph',
    BUTTON_LANG_EN: 'angliskiy',
    BUTTON_LANG_DE: 'nimyetskiy'
  })
  $translateProvider.translations('fr', {
    TITLE: 'Bonjour',
    FOO: 'C\'est un paragraph',
    BUTTON_LANG_EN: 'En anglais',
    BUTTON_LANG_DE: 'En allemand'
  })

  $translateProvider.preferredLanguage('en');
});

app.controller('Ctrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };

  $translate('TITLE').then(function(title) {
    $scope.title = title;
  }, function(translationId) {
    $scope.title = translationId;
  });
  $translate('FOO').then(function(foo) {
    $scope.foo = foo;
  }, function(translationId) {
    $scope.paragraph = translationId;
  });
  $translate('BUTTON_LANG_EN').then(function(button_lang) {
    $scope.button_lang_en = button_lang
  }, function(translationId) {
    $scope.button_lang_en = translationId;
  })
  $translate('BUTTON_LANG_DE').then(function(button_lang) {
    $scope.button_lang_de = button_lang
  }, function(translationId) {
    $scope.button_lang_de = translationId;
  })
});