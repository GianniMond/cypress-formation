Feature: Connexion SauceDemo

  En tant qu utilisateur
  Je veux me connecter a SauceDemo
  Afin d acceder a la liste des produits

  Scenario: Connexion reussie
    Given que je suis sur la page de connexion SauceDemo
    When je saisis le username "standard_user"
    And je saisis le password "secret_sauce"
    And je clique sur le bouton Login
    Then je suis redirige vers la page inventory
    And je vois le titre "Products"

  Scenario: Connexion en echec
    Given que je suis sur la page de connexion SauceDemo
    When je saisis le username "locked_out_user"
    And je saisis le password "secret_sauce"
    And je clique sur le bouton Login
    Then je vois un message d erreur
    And je reste sur la page de connexion