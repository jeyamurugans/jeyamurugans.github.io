angular.module('feesApp', [])
  .controller('feesController', function($scope) {
    $scope.list = [
		{idx:0,category:'Set-Up',val:[
			
			{desc:"Activation",amt:"$4.56",notes:"Includes personalized card, PIN and activation for primary and additional cards"},
			{desc:"Monthly Maintenance",amt:"$0.50",notes:"Primary card only"}
		]},
		
		{idx:1,category:'Add Money',val:[
			{desc:"Employer Direct Deposit",amt:"$0.50",notes:""},
			{desc:"Transfer from your checking/savings account",amt:"$0.50",notes:""}
		]},
		{idx:2,category:'Send Money',val:[
			{desc:"To a OneCard user",amt:"$0.50",notes:"Instant"},
			{desc:"To a debit card issued by another bank",amt:"$1",notes:"A few minutes"},
			{desc:"To an outside checking/savings account",amt:"$0.50",notes:"A few days"},
			{desc:"To domestic checking/savings account by Wire",amt:"$1",notes:"Same Day"}
		]},
		{idx:3,category:'Spend Money',val:[
			{desc:"Credit transaction with signature",amt:"$0",notes:""},
			{desc:"Debit transaction with PIN",amt:"$0.50",notes:""},
			{desc:"Cash-back at point-of-sale",amt:"$0",notes:""},
			{desc:"Decline due to Insufficient funds",amt:"$0.50",notes:""},
			{desc:"Foreign Currency Conversion",amt:"3%",notes:"Of transaction amount after conversion"}
		]},
		{idx:4,category:'ATM',val:[
			{desc:"Withdrawal",amt:"$45",notes:"Save by getting cash through a debit transaction at a local store."},
			{desc:"Balance Inquiry",amt:"$0.50",notes:""},
			{desc:"Decline due to Insufficient funds",amt:"$0",notes:""},
			{desc:"Foreign Currency Conversion",amt:"3%",notes:"Of transaction amount after conversion"}
		]},
		{idx:5,category:'Miscellaneous',val:[
			{desc:"Online Banking",amt:"$0",notes:""},
			{desc:"Customer Service Online",amt:"$0",notes:""},
			{desc:"Customer Service Calls",amt:"$0.50",notes:""},
			{desc:"Card Reissuance with Standard Delivery",amt:"$2",notes:""},
			{desc:"Card Reissuance with Express Delivery",amt:"$0.50",notes:""},
			{desc:"PIN Reminder",amt:"$3.45",notes:""},
			{desc:"Close Account and Disburse Balance",amt:"$40",notes:""}
		]}
	];
  });