angular.module('privacyApp',[])
  .controller('privacyController', function($scope) {
	  
    $scope.list1 = [
		{idx:0,category:"Why?",desc:"Financial companies choose how they share your personal information. Federal law gives consumers the right to limit some but not all sharing. Federal law also requires us to tell you how we collect, share, and protect your personal information. Please read this notice carefully to understand what we do."},
		
		{idx:1,category:"What?",desc:"The types of personal information we collect and share depend on the product or service you have with us. This information can include: <ul><li>Social Security number and credit history</li><li>Account balances and transaction or loss history</li><li>Other information about your transactions and accounts</li></ul> When you are no longer our customer, we continue to share your information as described in this notice."},
		{idx:2,category:"How?",desc:"All financial companies need to share customers' personal information to run their everyday business. In the section below, we list the reasons financial companies can share their customers' personal information; the reasons CBW Bank chooses to share; and whether you can limit this sharing."}		
	];
	
 $scope.list2 = [
		{idx:0,category:"For our everyday business purposes – such as to process your transactions, maintain your account(s), respond to court orders and legal investigations, or report to credit bureaus:",share:"Yes",limit:"No"},
		{idx:0,category:"For our marketing purposes – to offer our products and services to you:",share:"No",limit:"We don't share"},
		{idx:0,category:"For joint marketing with other financial companies",share:"No",limit:"We don't share"},
		{idx:0,category:"For our affiliates' everyday business purposes – information about your transactions:",share:"Yes",limit:"No"},
		{idx:0,category:"For our affiliates' everyday business purposes – information about your creditworthiness:",share:"",limit:""},
		{idx:0,category:"For our affiliates to market to you",share:"No",limit:"We don't share"},
		{idx:0,category:"For non-affiliates to market to you",share:"No",limit:"We don't share"}	
	];
		
  })
  
     .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);