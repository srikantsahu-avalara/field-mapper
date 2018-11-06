var inputJSON_1 = {
  linkFromPortIdProperty: "fromPort",
  linkToPortIdProperty: "toPort",
  nodeDataArray: [
    {
      key: "Salesforce",
      fields: [
        { name: "userID", info: "", color: "#F7B84B", figure: "Ellipse" },
        { name: "userName", info: "", color: "#F25022", figure: "Ellipse" },
        { name: "fieldThree", info: "", color: "#00BCF2" }
      ],
      loc: "0 0"
    },
    {
      key: "AvaTax",
      fields: [
        { name: "userId", info: "", color: "#FFB900", figure: "Diamond" },
        { name: "userName", info: "", color: "#F25022", figure: "Rectangle" },
        { name: "fieldC", info: "", color: "#7FBA00", figure: "Diamond" },
        { name: "fieldD", info: "", color: "#00BCF2", figure: "Rectangle" }
      ],
      loc: "250 0"
    }
  ],
  linkDataArray: [
    {
			"from":"fieldThree",
			"fromPort":"Salesforce",
			"to":"fieldD",
			"toPort":"AvaTax"
		}
  ]
};

var inputJSON_2 = {
	"linkFromPortIdProperty": "fromPort",
	"linkToPortIdProperty": "toPort",
	"nodeDataArray": [{
		"key": "Order",
		"fields": [{
				"name": "AccountId",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.Name",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.AccountNumber",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "AvaTaxMessage__c",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "OrderNumber",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Description",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Sales_Tax_Amount__c",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "ShippingStreet",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "ShippingCity",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "ShippingPostalCode",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "ShippingState",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "ShippingCountry",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "BillingStreet",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "BillingCity",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "BillingPostalCode",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "BillingState",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "BillingCountry",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.ShippingStreet",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.ShippingCity",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.ShippingPostalCode",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.ShippingState",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.ShippingCountry",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.BillingStreet",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.BillingCity",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.BillingPostalCode",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.BillingState",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			},
			{
				"name": "Account.BillingCountry {subsidiary}",
				"info": "",
				"color": "#F7B84B",
				"figure": "Ellipse"
			}
		],
		"loc": "0 0"
	}, {
		"key": "AvaTax",
		"fields": [{
			"name": "code",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "type",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "totalTax",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "companyCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "date",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "salespersonCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "customerCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "customerUsageType",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "entityUseCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "discount",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "purchaseOrderNo",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "exemptionNo",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "parameters",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "referenceCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "reportingLocationCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "commit",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "batchCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "currencyCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "serviceMode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "exchangeRate",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "exchangeRateEffectiveDate",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "posLaneCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "businessIdentificationNo",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "isSellerImporterOfRecord",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "description",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "email",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "debugLevel",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "taxOverride.type",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "taxOverride.taxAmount",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "taxOverride.taxDate",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "taxOverride.reason",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.locationCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.line1",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.line2",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.line3",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.city",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.region",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.country",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.postalCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.latitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.singleLocation.longitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.locationCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.line1",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.line2",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.line3",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.city",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.region",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.country",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.postalCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.latitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipFrom.longitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.locationCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.line1",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.line2",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.line3",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.city",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.region",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.country",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.postalCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.latitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.shipTo.longitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.locationCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.line1",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.line2",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.line3",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.city",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.region",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.country",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.postalCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.latitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderOrigin.longitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.locationCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.line1",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.line2",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.line3",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.city",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.region",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.country",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.postalCode",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.latitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}, {
			"name": "addresses.pointOfOrderAcceptance.longitude",
			"info": "",
			"color": "#F7B84B",
			"figure": "Ellipse"
		}],
		"loc": "250 0"
	}],
	"linkDataArray": [{
		"from": "Order",
		"fromPort": "OrderNumber",
		"to": "AvaTax",
		"toPort": "code"
	}, {
		"from": "Order",
		"fromPort": "Account.Name",
		"to": "AvaTax",
		"toPort": "customerCode"
	}]
};

var inputJSON_3 = {
	"nodeDataArray": [{
		"key": "Billing",
		"fields": [{
			"name": "BillingStreet"
		}, {
			"name": "BillingCity"
		}, {
			"name": "BillingState"
		}, {
			"name": "BillingCountry"
		}, {
			"name": "BillingPostalCode"
		}]
	}, {
		"key": "AvaTax",
		"fields": [{
			"name": "line1"
		}, {
			"name": "line2"
		}, {
			"name": "line3"
		}, {
			"name": "city"
		}, {
			"name": "region"
		}, {
			"name": "country"
		}, {
			"name": "postalcode"
		}, {
			"name": "latitude"
		}, {
			"name": "longitude"
		}]
	}],
	"linkDataArray": [{
		"from": "Billing",
		"fromPort": "BillingStreet",
		"to": "AvaTax",
		"toPort": "line1"
	}, {
		"from": "Billing",
		"fromPort": "BillingCity",
		"to": "AvaTax",
		"toPort": "city"
	}, {
		"from": "Billing",
		"fromPort": "BillingState",
		"to": "AvaTax",
		"toPort": "region"
	}, {
		"from": "Billing",
		"fromPort": "BillingCountry",
		"to": "AvaTax",
		"toPort": "country"
	}, {
		"from": "Billing",
		"fromPort": "BillingPostalCode",
		"to": "AvaTax",
		"toPort": "postalcode"
	}],
	"linkFromPortIdProperty": "fromPort",
	"linkToPortIdProperty": "toPort"
};

var inputJSON_4 = {
	"nodeDataArray": [{
		"key": "AvaTaxResponse",
		"fields": [{
			"name": "line1"
		}, {
			"name": "line2"
		}, {
			"name": "line3"
		}, {
			"name": "city"
		}, {
			"name": "region"
		}, {
			"name": "country"
		}, {
			"name": "postalcode"
		}, {
			"name": "latitude"
		}, {
			"name": "longitude"
		}]
	}, {
		"key": "BillingResponse",
		"fields": [{
			"name": "BillingStreet"
		}, {
			"name": "BillingCity"
		}, {
			"name": "BillingState"
		}, {
			"name": "BillingCountry"
		}, {
			"name": "BillingPostalCode"
		}]
	}],
	"linkDataArray": [{
		"from": "AvaTaxResponse",
		"fromPort": "city",
		"to": "BillingResponse",
		"toPort": "BillingCity"
	}, {
		"from": "AvaTaxResponse",
		"fromPort": "region",
		"to": "BillingResponse",
		"toPort": "BillingState"
	}, {
		"from": "AvaTaxResponse",
		"fromPort": "country",
		"to": "BillingResponse",
		"toPort": "BillingCountry"
	}, {
		"from": "AvaTaxResponse",
		"fromPort": "postalcode",
		"to": "BillingResponse",
		"toPort": "BillingPostalCode"
	}],
	"linkFromPortIdProperty": "fromPort",
	"linkToPortIdProperty": "toPort"
};
