# Project Snack Bar:

A student that completes this project shows that they can:

- use the Java Development Kit (JDK)
- use and manipulate Java base data types
- construct Java classes including instantiating and using Java Objects
- use and manipulate Java base data types

# Introduction

Variations on the Snack Bar Project have been part of Java Education
since Java was created. So, we will do one. The point is to set up
vending machines where a person buys snacks from those machines.

# Instructions

## Snack

Snack has fields (so knows)

- [x] id
- [x] name
- [x] quantity
- [x] cost
- [x] vending machine id

Snack has methods (so can)

- [x] set and get id
- [x] set and get name
- [x] set and get cost
- [x] set and get vending machine id
- [x] get quantity
- [x] add quantity when given how many to add
- [x] buy snack when given how many to buy
- [x] get total cost given a quantity

## Vending Machine

Vending machine has fields (so knows)

- [x] id
- [x] name

Vending Machine has methods (so can)

- [x] set and get id
- [x] set and get name

## Customer

[X] Customer has id, name, cash on hand.
[X] Customer can add cash, buy given total cash used in purchase, get and set name, get cash on hand.

## Instructions

- Instantiate 2 customers

  - [x] Jane with $45.25
  - [x] Bob with $33.14

- Instantiate 3 Vending Machines

  - [x] Food
  - [x] Drink
  - [x] Office

- Instantiate 5 snacks
  - [x] In Vending Machine Food
    - [x] 36 Chips at $1.75
    - [x] 36 Chocolate Bar at $1.00
    - [x] 30 Pretzel at $2.00
  - [x] In Vending Machine Drink
    - [x] 24 Soda at $2.50
    - [x] 20 Water at $2.75
- Processing

1. [x] Customer 1 (Jane) buys 3 of snack 4 (Soda). Print Customer 1 (Jane) Cash on hand. Print quantity of snack 4 (Soda).
1. [x] Customer 1 (Jane) buys 1 of snack 3 (Pretzel). Print Customer 1 (Jane) Cash on hand. Print quantity of snack 3 (Pretzel).
1. [x] Customer 2 (Bob) buys 2 of snack 4 (Sode). Print Customer 2 (Bob) Cash on Hand. Print quantity of snack 4 (Soda).
1. [x] Customer 1 (Jane) finds $10. Print Customer 1 (Jane) Cash on Hand.
1. [ ] Customer 1 (Jane) buys 1 of snack 2 (Chocolate Bar). Print Customer 1 (Jane) Cash on Hand. Print quantity of snack 2 (Chocolate Bar).
1. [x] Add 12 more items to snack 3 (Pretzel). Print quantity of snack 3 (Pretzel).
1. [x] Customer 2 (Bob) buys 3 of snack 3 (Pretzel). Print Customer 2 (Bob) Cash on hand. Print quantity of snack 3 (Pretzel).

- Stretch Goals

  - [x] Display each snack with
    - [x] Name
    - [x] Vending Machine Name
    - [x] Quantity on hand
    - [x] Total cost of all of the quantities of this snack on hand
