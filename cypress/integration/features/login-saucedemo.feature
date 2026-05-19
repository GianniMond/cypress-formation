@ui @auth @pom
Feature: Authentification SauceDemo avec Page Object Model

  En tant qu utilisateur
  Je veux me connecter avec mes identifiants
  Afin d acceder à mon espace ou voir un message d erreur

  Background:
    Given je suis connecté à SauceDemo

  Scenario: Connexion valide
    When je me connecte avec le username "standard_user" et le password "secret_sauce"
    Then je dois etre connecte et voir la page Products

  Scenario: Connexion invalide
    When je me connecte avec le username "locked_out_user" et le password "secret_sauce"
    Then je dois voir un message d erreur de connexion
