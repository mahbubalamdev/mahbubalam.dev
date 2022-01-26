---
title: Prize bond checker
description: Easy to use, automated checking of prize bond draws
github: https://github.com/mahbubalamdev/prizebondchecker
languages:
  - Python
---

# Prize bond checker

In order to encourage savings, the Govt. of Bangladesh offers prize bonds with face value of Tk.100 each.
Prize bond draw is held on 31st January, 30th April, 30th July, and 31st October each year.
Each series has 1000000 prize bonds and there are about 26  series. If a prize bond number wins, all prize bonds having that number in every series also win.

This application helps users to store prize bond numbers in their account and notifies them if any of their prize bond number wins.

## Sites

- [Live Site](https://prizebondchecker.mahbubalam.dev/)

# How to use

Unauthenticated users can search wining prize bond numbers. Authenticated users can store their prize bond numbers and can see if they have any winning numbers.

# System Design

For authenticaton, AWS Cognito Userpool and Google Identity Provider is used. So users can login with google or signup with Cognito user pool.

For data storage, DynamoDB table is used to store users prize bond numbers. Each record consists of username and prize bond number. Username is used as primary key and prize bond number is used as sort key to enable fast query for finding all the prizebonds corresponding to an user.

AWS Lambda is used in compute layer which interacts with the DynamoDB table. The lambda function uses FastAPI to serve user requests.

API Gateway is integrated with the lambda function and exposes REST api to be used from frontend. API gateway has built in support for authentication with Cognito User pool.
