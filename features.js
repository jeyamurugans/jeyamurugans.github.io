angular.module('featuresApp', [])
  .controller('featuresController', function($scope) {
	$scope.fs = {};
	
	
	
	
    $scope.flist = [		
	
		{idx:0,ficocls:'ico-fdic',ficoclsatc:'ico-fdic-active',fcls:'active',fimg:'images/ico-safe1.svg',fheading:'FDIC Insured for up to $250,000',
		fdesc:'Your money is FDIC insured through CBW Bank to at least $250,000. Its safer than carrying cash! CBW Bank, Member FDIC.'},
	
		{idx:1,ficocls:'ico-mc',ficoclsatc:'ico-mc-active',fimg:'images/ico-mc1.svg',fheading:'MasterCard Zero Liability Protection',
		fdesc:'Your OneCard is protected against any fraudulent and unauthorized transactions. See Terms and Conditions for details.'},
				
		{idx:2,ficocls:'ico-linkb',ficoclsatc:'ico-linkb-active',fimg:'images/ico-computer1.svg',fheading:'Link your bank account to your OneCard',
		fdesc:'Already have a bank account? No problem. Transfer money between your accounts.'},
						
		{idx:3,ficocls:'ico-accessac',ficoclsatc:'ico-accessac-active',fimg:'images/ico-paper1.svg',fheading:'Access your account whenever you need to',
		fdesc:'Check your balance, review your transaction history, and transfer money anywhere at anytime online.'},
				
		{idx:4,ficocls:'ico-recpay',ficoclsatc:'ico-recpay-active',fimg:'images/ico-check1.svg',fheading:'Receive your paycheck electronically',
		fdesc:'Eliminate the high cost of check cashing fees and get more from your paycheck through Direct Deposit.'},
		
		{idx:5,ficocls:'ico-mcaccept',ficoclsatc:'ico-mcaccept-active',fimg:'images/ico-ATM1.svg',fheading:'Use your card anywhere MasterCard is accepted',
		fdesc:'Shop at any MasterCard merchant location in store or online and withdraw cash at any MasterCard ATM.'}
	];
	
	
		$scope.fs = $scope.flist[0];
		
		$scope.selectFC = function(fr){
			$scope.fs = fr;
			}
			
		
  });