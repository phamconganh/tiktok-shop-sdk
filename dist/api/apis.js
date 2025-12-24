"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_OPERATION_NAME_MAP = exports.API_OBJECT = exports.API_ENUM = exports.APIS = exports.HttpError = void 0;
__exportStar(require("./affiliateCreatorV202405Api"), exports);
const affiliateCreatorV202405Api_1 = require("./affiliateCreatorV202405Api");
__exportStar(require("./affiliateCreatorV202407Api"), exports);
const affiliateCreatorV202407Api_1 = require("./affiliateCreatorV202407Api");
__exportStar(require("./affiliateCreatorV202409Api"), exports);
const affiliateCreatorV202409Api_1 = require("./affiliateCreatorV202409Api");
__exportStar(require("./affiliateCreatorV202410Api"), exports);
const affiliateCreatorV202410Api_1 = require("./affiliateCreatorV202410Api");
__exportStar(require("./affiliateCreatorV202412Api"), exports);
const affiliateCreatorV202412Api_1 = require("./affiliateCreatorV202412Api");
__exportStar(require("./affiliateCreatorV202501Api"), exports);
const affiliateCreatorV202501Api_1 = require("./affiliateCreatorV202501Api");
__exportStar(require("./affiliateCreatorV202508Api"), exports);
const affiliateCreatorV202508Api_1 = require("./affiliateCreatorV202508Api");
__exportStar(require("./affiliateCreatorV202509Api"), exports);
const affiliateCreatorV202509Api_1 = require("./affiliateCreatorV202509Api");
__exportStar(require("./affiliateCreatorV202512Api"), exports);
const affiliateCreatorV202512Api_1 = require("./affiliateCreatorV202512Api");
__exportStar(require("./affiliatePartnerV202405Api"), exports);
const affiliatePartnerV202405Api_1 = require("./affiliatePartnerV202405Api");
__exportStar(require("./affiliatePartnerV202411Api"), exports);
const affiliatePartnerV202411Api_1 = require("./affiliatePartnerV202411Api");
__exportStar(require("./affiliatePartnerV202501Api"), exports);
const affiliatePartnerV202501Api_1 = require("./affiliatePartnerV202501Api");
__exportStar(require("./affiliatePartnerV202505Api"), exports);
const affiliatePartnerV202505Api_1 = require("./affiliatePartnerV202505Api");
__exportStar(require("./affiliatePartnerV202508Api"), exports);
const affiliatePartnerV202508Api_1 = require("./affiliatePartnerV202508Api");
__exportStar(require("./affiliateSellerV202405Api"), exports);
const affiliateSellerV202405Api_1 = require("./affiliateSellerV202405Api");
__exportStar(require("./affiliateSellerV202406Api"), exports);
const affiliateSellerV202406Api_1 = require("./affiliateSellerV202406Api");
__exportStar(require("./affiliateSellerV202409Api"), exports);
const affiliateSellerV202409Api_1 = require("./affiliateSellerV202409Api");
__exportStar(require("./affiliateSellerV202410Api"), exports);
const affiliateSellerV202410Api_1 = require("./affiliateSellerV202410Api");
__exportStar(require("./affiliateSellerV202412Api"), exports);
const affiliateSellerV202412Api_1 = require("./affiliateSellerV202412Api");
__exportStar(require("./affiliateSellerV202505Api"), exports);
const affiliateSellerV202505Api_1 = require("./affiliateSellerV202505Api");
__exportStar(require("./affiliateSellerV202507Api"), exports);
const affiliateSellerV202507Api_1 = require("./affiliateSellerV202507Api");
__exportStar(require("./affiliateSellerV202508Api"), exports);
const affiliateSellerV202508Api_1 = require("./affiliateSellerV202508Api");
__exportStar(require("./affiliateSellerV202509Api"), exports);
const affiliateSellerV202509Api_1 = require("./affiliateSellerV202509Api");
__exportStar(require("./affiliateSellerV202511Api"), exports);
const affiliateSellerV202511Api_1 = require("./affiliateSellerV202511Api");
__exportStar(require("./affiliateSellerV202512Api"), exports);
const affiliateSellerV202512Api_1 = require("./affiliateSellerV202512Api");
__exportStar(require("./affiliateV202309Api"), exports);
const affiliateV202309Api_1 = require("./affiliateV202309Api");
__exportStar(require("./affiliateV202402Api"), exports);
const affiliateV202402Api_1 = require("./affiliateV202402Api");
__exportStar(require("./affiliateV202403Api"), exports);
const affiliateV202403Api_1 = require("./affiliateV202403Api");
__exportStar(require("./analyticsV202405Api"), exports);
const analyticsV202405Api_1 = require("./analyticsV202405Api");
__exportStar(require("./analyticsV202406Api"), exports);
const analyticsV202406Api_1 = require("./analyticsV202406Api");
__exportStar(require("./analyticsV202409Api"), exports);
const analyticsV202409Api_1 = require("./analyticsV202409Api");
__exportStar(require("./analyticsV202508Api"), exports);
const analyticsV202508Api_1 = require("./analyticsV202508Api");
__exportStar(require("./authorizationV202309Api"), exports);
const authorizationV202309Api_1 = require("./authorizationV202309Api");
__exportStar(require("./authorizationV202312Api"), exports);
const authorizationV202312Api_1 = require("./authorizationV202312Api");
__exportStar(require("./authorizationV202401Api"), exports);
const authorizationV202401Api_1 = require("./authorizationV202401Api");
__exportStar(require("./authorizationV202403Api"), exports);
const authorizationV202403Api_1 = require("./authorizationV202403Api");
__exportStar(require("./authorizationV202405Api"), exports);
const authorizationV202405Api_1 = require("./authorizationV202405Api");
__exportStar(require("./customerServiceV202309Api"), exports);
const customerServiceV202309Api_1 = require("./customerServiceV202309Api");
__exportStar(require("./customerServiceV202407Api"), exports);
const customerServiceV202407Api_1 = require("./customerServiceV202407Api");
__exportStar(require("./dataReconciliationV202309Api"), exports);
const dataReconciliationV202309Api_1 = require("./dataReconciliationV202309Api");
__exportStar(require("./dataReconciliationV202310Api"), exports);
const dataReconciliationV202310Api_1 = require("./dataReconciliationV202310Api");
__exportStar(require("./dataReconciliationV202401Api"), exports);
const dataReconciliationV202401Api_1 = require("./dataReconciliationV202401Api");
__exportStar(require("./eventV202309Api"), exports);
const eventV202309Api_1 = require("./eventV202309Api");
__exportStar(require("./financeV202309Api"), exports);
const financeV202309Api_1 = require("./financeV202309Api");
__exportStar(require("./financeV202501Api"), exports);
const financeV202501Api_1 = require("./financeV202501Api");
__exportStar(require("./financeV202507Api"), exports);
const financeV202507Api_1 = require("./financeV202507Api");
__exportStar(require("./fulfillmentV202309Api"), exports);
const fulfillmentV202309Api_1 = require("./fulfillmentV202309Api");
__exportStar(require("./fulfillmentV202407Api"), exports);
const fulfillmentV202407Api_1 = require("./fulfillmentV202407Api");
__exportStar(require("./fulfillmentV202502Api"), exports);
const fulfillmentV202502Api_1 = require("./fulfillmentV202502Api");
__exportStar(require("./fulfillmentV202508Api"), exports);
const fulfillmentV202508Api_1 = require("./fulfillmentV202508Api");
__exportStar(require("./fulfillmentV202510Api"), exports);
const fulfillmentV202510Api_1 = require("./fulfillmentV202510Api");
__exportStar(require("./logisticsV202309Api"), exports);
const logisticsV202309Api_1 = require("./logisticsV202309Api");
__exportStar(require("./logisticsV202510Api"), exports);
const logisticsV202510Api_1 = require("./logisticsV202510Api");
__exportStar(require("./openV202512Api"), exports);
const openV202512Api_1 = require("./openV202512Api");
__exportStar(require("./orderV202309Api"), exports);
const orderV202309Api_1 = require("./orderV202309Api");
__exportStar(require("./orderV202407Api"), exports);
const orderV202407Api_1 = require("./orderV202407Api");
__exportStar(require("./orderV202507Api"), exports);
const orderV202507Api_1 = require("./orderV202507Api");
__exportStar(require("./orderV202511Api"), exports);
const orderV202511Api_1 = require("./orderV202511Api");
__exportStar(require("./productV202309Api"), exports);
const productV202309Api_1 = require("./productV202309Api");
__exportStar(require("./productV202312Api"), exports);
const productV202312Api_1 = require("./productV202312Api");
__exportStar(require("./productV202401Api"), exports);
const productV202401Api_1 = require("./productV202401Api");
__exportStar(require("./productV202404Api"), exports);
const productV202404Api_1 = require("./productV202404Api");
__exportStar(require("./productV202405Api"), exports);
const productV202405Api_1 = require("./productV202405Api");
__exportStar(require("./productV202407Api"), exports);
const productV202407Api_1 = require("./productV202407Api");
__exportStar(require("./productV202409Api"), exports);
const productV202409Api_1 = require("./productV202409Api");
__exportStar(require("./productV202411Api"), exports);
const productV202411Api_1 = require("./productV202411Api");
__exportStar(require("./productV202501Api"), exports);
const productV202501Api_1 = require("./productV202501Api");
__exportStar(require("./productV202502Api"), exports);
const productV202502Api_1 = require("./productV202502Api");
__exportStar(require("./productV202505Api"), exports);
const productV202505Api_1 = require("./productV202505Api");
__exportStar(require("./productV202506Api"), exports);
const productV202506Api_1 = require("./productV202506Api");
__exportStar(require("./productV202507Api"), exports);
const productV202507Api_1 = require("./productV202507Api");
__exportStar(require("./productV202509Api"), exports);
const productV202509Api_1 = require("./productV202509Api");
__exportStar(require("./promotionV202309Api"), exports);
const promotionV202309Api_1 = require("./promotionV202309Api");
__exportStar(require("./promotionV202406Api"), exports);
const promotionV202406Api_1 = require("./promotionV202406Api");
__exportStar(require("./returnRefundV202309Api"), exports);
const returnRefundV202309Api_1 = require("./returnRefundV202309Api");
__exportStar(require("./sellerV202309Api"), exports);
const sellerV202309Api_1 = require("./sellerV202309Api");
__exportStar(require("./supplyChainV202309Api"), exports);
const supplyChainV202309Api_1 = require("./supplyChainV202309Api");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [affiliateCreatorV202405Api_1.AffiliateCreatorV202405Api, affiliateCreatorV202407Api_1.AffiliateCreatorV202407Api, affiliateCreatorV202409Api_1.AffiliateCreatorV202409Api, affiliateCreatorV202410Api_1.AffiliateCreatorV202410Api, affiliateCreatorV202412Api_1.AffiliateCreatorV202412Api, affiliateCreatorV202501Api_1.AffiliateCreatorV202501Api, affiliateCreatorV202508Api_1.AffiliateCreatorV202508Api, affiliateCreatorV202509Api_1.AffiliateCreatorV202509Api, affiliateCreatorV202512Api_1.AffiliateCreatorV202512Api, affiliatePartnerV202405Api_1.AffiliatePartnerV202405Api, affiliatePartnerV202411Api_1.AffiliatePartnerV202411Api, affiliatePartnerV202501Api_1.AffiliatePartnerV202501Api, affiliatePartnerV202505Api_1.AffiliatePartnerV202505Api, affiliatePartnerV202508Api_1.AffiliatePartnerV202508Api, affiliateSellerV202405Api_1.AffiliateSellerV202405Api, affiliateSellerV202406Api_1.AffiliateSellerV202406Api, affiliateSellerV202409Api_1.AffiliateSellerV202409Api, affiliateSellerV202410Api_1.AffiliateSellerV202410Api, affiliateSellerV202412Api_1.AffiliateSellerV202412Api, affiliateSellerV202505Api_1.AffiliateSellerV202505Api, affiliateSellerV202507Api_1.AffiliateSellerV202507Api, affiliateSellerV202508Api_1.AffiliateSellerV202508Api, affiliateSellerV202509Api_1.AffiliateSellerV202509Api, affiliateSellerV202511Api_1.AffiliateSellerV202511Api, affiliateSellerV202512Api_1.AffiliateSellerV202512Api, affiliateV202309Api_1.AffiliateV202309Api, affiliateV202402Api_1.AffiliateV202402Api, affiliateV202403Api_1.AffiliateV202403Api, analyticsV202405Api_1.AnalyticsV202405Api, analyticsV202406Api_1.AnalyticsV202406Api, analyticsV202409Api_1.AnalyticsV202409Api, analyticsV202508Api_1.AnalyticsV202508Api, authorizationV202309Api_1.AuthorizationV202309Api, authorizationV202312Api_1.AuthorizationV202312Api, authorizationV202401Api_1.AuthorizationV202401Api, authorizationV202403Api_1.AuthorizationV202403Api, authorizationV202405Api_1.AuthorizationV202405Api, customerServiceV202309Api_1.CustomerServiceV202309Api, customerServiceV202407Api_1.CustomerServiceV202407Api, dataReconciliationV202309Api_1.DataReconciliationV202309Api, dataReconciliationV202310Api_1.DataReconciliationV202310Api, dataReconciliationV202401Api_1.DataReconciliationV202401Api, eventV202309Api_1.EventV202309Api, financeV202309Api_1.FinanceV202309Api, financeV202501Api_1.FinanceV202501Api, financeV202507Api_1.FinanceV202507Api, fulfillmentV202309Api_1.FulfillmentV202309Api, fulfillmentV202407Api_1.FulfillmentV202407Api, fulfillmentV202502Api_1.FulfillmentV202502Api, fulfillmentV202508Api_1.FulfillmentV202508Api, fulfillmentV202510Api_1.FulfillmentV202510Api, logisticsV202309Api_1.LogisticsV202309Api, logisticsV202510Api_1.LogisticsV202510Api, openV202512Api_1.OpenV202512Api, orderV202309Api_1.OrderV202309Api, orderV202407Api_1.OrderV202407Api, orderV202507Api_1.OrderV202507Api, orderV202511Api_1.OrderV202511Api, productV202309Api_1.ProductV202309Api, productV202312Api_1.ProductV202312Api, productV202401Api_1.ProductV202401Api, productV202404Api_1.ProductV202404Api, productV202405Api_1.ProductV202405Api, productV202407Api_1.ProductV202407Api, productV202409Api_1.ProductV202409Api, productV202411Api_1.ProductV202411Api, productV202501Api_1.ProductV202501Api, productV202502Api_1.ProductV202502Api, productV202505Api_1.ProductV202505Api, productV202506Api_1.ProductV202506Api, productV202507Api_1.ProductV202507Api, productV202509Api_1.ProductV202509Api, promotionV202309Api_1.PromotionV202309Api, promotionV202406Api_1.PromotionV202406Api, returnRefundV202309Api_1.ReturnRefundV202309Api, sellerV202309Api_1.SellerV202309Api, supplyChainV202309Api_1.SupplyChainV202309Api];
var API_ENUM;
(function (API_ENUM) {
    API_ENUM["AffiliateCreatorV202405Api"] = "AffiliateCreatorV202405Api";
    API_ENUM["AffiliateCreatorV202407Api"] = "AffiliateCreatorV202407Api";
    API_ENUM["AffiliateCreatorV202409Api"] = "AffiliateCreatorV202409Api";
    API_ENUM["AffiliateCreatorV202410Api"] = "AffiliateCreatorV202410Api";
    API_ENUM["AffiliateCreatorV202412Api"] = "AffiliateCreatorV202412Api";
    API_ENUM["AffiliateCreatorV202501Api"] = "AffiliateCreatorV202501Api";
    API_ENUM["AffiliateCreatorV202508Api"] = "AffiliateCreatorV202508Api";
    API_ENUM["AffiliateCreatorV202509Api"] = "AffiliateCreatorV202509Api";
    API_ENUM["AffiliateCreatorV202512Api"] = "AffiliateCreatorV202512Api";
    API_ENUM["AffiliatePartnerV202405Api"] = "AffiliatePartnerV202405Api";
    API_ENUM["AffiliatePartnerV202411Api"] = "AffiliatePartnerV202411Api";
    API_ENUM["AffiliatePartnerV202501Api"] = "AffiliatePartnerV202501Api";
    API_ENUM["AffiliatePartnerV202505Api"] = "AffiliatePartnerV202505Api";
    API_ENUM["AffiliatePartnerV202508Api"] = "AffiliatePartnerV202508Api";
    API_ENUM["AffiliateSellerV202405Api"] = "AffiliateSellerV202405Api";
    API_ENUM["AffiliateSellerV202406Api"] = "AffiliateSellerV202406Api";
    API_ENUM["AffiliateSellerV202409Api"] = "AffiliateSellerV202409Api";
    API_ENUM["AffiliateSellerV202410Api"] = "AffiliateSellerV202410Api";
    API_ENUM["AffiliateSellerV202412Api"] = "AffiliateSellerV202412Api";
    API_ENUM["AffiliateSellerV202505Api"] = "AffiliateSellerV202505Api";
    API_ENUM["AffiliateSellerV202507Api"] = "AffiliateSellerV202507Api";
    API_ENUM["AffiliateSellerV202508Api"] = "AffiliateSellerV202508Api";
    API_ENUM["AffiliateSellerV202509Api"] = "AffiliateSellerV202509Api";
    API_ENUM["AffiliateSellerV202511Api"] = "AffiliateSellerV202511Api";
    API_ENUM["AffiliateSellerV202512Api"] = "AffiliateSellerV202512Api";
    API_ENUM["AffiliateV202309Api"] = "AffiliateV202309Api";
    API_ENUM["AffiliateV202402Api"] = "AffiliateV202402Api";
    API_ENUM["AffiliateV202403Api"] = "AffiliateV202403Api";
    API_ENUM["AnalyticsV202405Api"] = "AnalyticsV202405Api";
    API_ENUM["AnalyticsV202406Api"] = "AnalyticsV202406Api";
    API_ENUM["AnalyticsV202409Api"] = "AnalyticsV202409Api";
    API_ENUM["AnalyticsV202508Api"] = "AnalyticsV202508Api";
    API_ENUM["AuthorizationV202309Api"] = "AuthorizationV202309Api";
    API_ENUM["AuthorizationV202312Api"] = "AuthorizationV202312Api";
    API_ENUM["AuthorizationV202401Api"] = "AuthorizationV202401Api";
    API_ENUM["AuthorizationV202403Api"] = "AuthorizationV202403Api";
    API_ENUM["AuthorizationV202405Api"] = "AuthorizationV202405Api";
    API_ENUM["CustomerServiceV202309Api"] = "CustomerServiceV202309Api";
    API_ENUM["CustomerServiceV202407Api"] = "CustomerServiceV202407Api";
    API_ENUM["DataReconciliationV202309Api"] = "DataReconciliationV202309Api";
    API_ENUM["DataReconciliationV202310Api"] = "DataReconciliationV202310Api";
    API_ENUM["DataReconciliationV202401Api"] = "DataReconciliationV202401Api";
    API_ENUM["EventV202309Api"] = "EventV202309Api";
    API_ENUM["FinanceV202309Api"] = "FinanceV202309Api";
    API_ENUM["FinanceV202501Api"] = "FinanceV202501Api";
    API_ENUM["FinanceV202507Api"] = "FinanceV202507Api";
    API_ENUM["FulfillmentV202309Api"] = "FulfillmentV202309Api";
    API_ENUM["FulfillmentV202407Api"] = "FulfillmentV202407Api";
    API_ENUM["FulfillmentV202502Api"] = "FulfillmentV202502Api";
    API_ENUM["FulfillmentV202508Api"] = "FulfillmentV202508Api";
    API_ENUM["FulfillmentV202510Api"] = "FulfillmentV202510Api";
    API_ENUM["LogisticsV202309Api"] = "LogisticsV202309Api";
    API_ENUM["LogisticsV202510Api"] = "LogisticsV202510Api";
    API_ENUM["OpenV202512Api"] = "OpenV202512Api";
    API_ENUM["OrderV202309Api"] = "OrderV202309Api";
    API_ENUM["OrderV202407Api"] = "OrderV202407Api";
    API_ENUM["OrderV202507Api"] = "OrderV202507Api";
    API_ENUM["OrderV202511Api"] = "OrderV202511Api";
    API_ENUM["ProductV202309Api"] = "ProductV202309Api";
    API_ENUM["ProductV202312Api"] = "ProductV202312Api";
    API_ENUM["ProductV202401Api"] = "ProductV202401Api";
    API_ENUM["ProductV202404Api"] = "ProductV202404Api";
    API_ENUM["ProductV202405Api"] = "ProductV202405Api";
    API_ENUM["ProductV202407Api"] = "ProductV202407Api";
    API_ENUM["ProductV202409Api"] = "ProductV202409Api";
    API_ENUM["ProductV202411Api"] = "ProductV202411Api";
    API_ENUM["ProductV202501Api"] = "ProductV202501Api";
    API_ENUM["ProductV202502Api"] = "ProductV202502Api";
    API_ENUM["ProductV202505Api"] = "ProductV202505Api";
    API_ENUM["ProductV202506Api"] = "ProductV202506Api";
    API_ENUM["ProductV202507Api"] = "ProductV202507Api";
    API_ENUM["ProductV202509Api"] = "ProductV202509Api";
    API_ENUM["PromotionV202309Api"] = "PromotionV202309Api";
    API_ENUM["PromotionV202406Api"] = "PromotionV202406Api";
    API_ENUM["ReturnRefundV202309Api"] = "ReturnRefundV202309Api";
    API_ENUM["SellerV202309Api"] = "SellerV202309Api";
    API_ENUM["SupplyChainV202309Api"] = "SupplyChainV202309Api";
})(API_ENUM = exports.API_ENUM || (exports.API_ENUM = {}));
exports.API_OBJECT = {
    AffiliateCreatorV202405Api: affiliateCreatorV202405Api_1.AffiliateCreatorV202405Api,
    AffiliateCreatorV202407Api: affiliateCreatorV202407Api_1.AffiliateCreatorV202407Api,
    AffiliateCreatorV202409Api: affiliateCreatorV202409Api_1.AffiliateCreatorV202409Api,
    AffiliateCreatorV202410Api: affiliateCreatorV202410Api_1.AffiliateCreatorV202410Api,
    AffiliateCreatorV202412Api: affiliateCreatorV202412Api_1.AffiliateCreatorV202412Api,
    AffiliateCreatorV202501Api: affiliateCreatorV202501Api_1.AffiliateCreatorV202501Api,
    AffiliateCreatorV202508Api: affiliateCreatorV202508Api_1.AffiliateCreatorV202508Api,
    AffiliateCreatorV202509Api: affiliateCreatorV202509Api_1.AffiliateCreatorV202509Api,
    AffiliateCreatorV202512Api: affiliateCreatorV202512Api_1.AffiliateCreatorV202512Api,
    AffiliatePartnerV202405Api: affiliatePartnerV202405Api_1.AffiliatePartnerV202405Api,
    AffiliatePartnerV202411Api: affiliatePartnerV202411Api_1.AffiliatePartnerV202411Api,
    AffiliatePartnerV202501Api: affiliatePartnerV202501Api_1.AffiliatePartnerV202501Api,
    AffiliatePartnerV202505Api: affiliatePartnerV202505Api_1.AffiliatePartnerV202505Api,
    AffiliatePartnerV202508Api: affiliatePartnerV202508Api_1.AffiliatePartnerV202508Api,
    AffiliateSellerV202405Api: affiliateSellerV202405Api_1.AffiliateSellerV202405Api,
    AffiliateSellerV202406Api: affiliateSellerV202406Api_1.AffiliateSellerV202406Api,
    AffiliateSellerV202409Api: affiliateSellerV202409Api_1.AffiliateSellerV202409Api,
    AffiliateSellerV202410Api: affiliateSellerV202410Api_1.AffiliateSellerV202410Api,
    AffiliateSellerV202412Api: affiliateSellerV202412Api_1.AffiliateSellerV202412Api,
    AffiliateSellerV202505Api: affiliateSellerV202505Api_1.AffiliateSellerV202505Api,
    AffiliateSellerV202507Api: affiliateSellerV202507Api_1.AffiliateSellerV202507Api,
    AffiliateSellerV202508Api: affiliateSellerV202508Api_1.AffiliateSellerV202508Api,
    AffiliateSellerV202509Api: affiliateSellerV202509Api_1.AffiliateSellerV202509Api,
    AffiliateSellerV202511Api: affiliateSellerV202511Api_1.AffiliateSellerV202511Api,
    AffiliateSellerV202512Api: affiliateSellerV202512Api_1.AffiliateSellerV202512Api,
    AffiliateV202309Api: affiliateV202309Api_1.AffiliateV202309Api,
    AffiliateV202402Api: affiliateV202402Api_1.AffiliateV202402Api,
    AffiliateV202403Api: affiliateV202403Api_1.AffiliateV202403Api,
    AnalyticsV202405Api: analyticsV202405Api_1.AnalyticsV202405Api,
    AnalyticsV202406Api: analyticsV202406Api_1.AnalyticsV202406Api,
    AnalyticsV202409Api: analyticsV202409Api_1.AnalyticsV202409Api,
    AnalyticsV202508Api: analyticsV202508Api_1.AnalyticsV202508Api,
    AuthorizationV202309Api: authorizationV202309Api_1.AuthorizationV202309Api,
    AuthorizationV202312Api: authorizationV202312Api_1.AuthorizationV202312Api,
    AuthorizationV202401Api: authorizationV202401Api_1.AuthorizationV202401Api,
    AuthorizationV202403Api: authorizationV202403Api_1.AuthorizationV202403Api,
    AuthorizationV202405Api: authorizationV202405Api_1.AuthorizationV202405Api,
    CustomerServiceV202309Api: customerServiceV202309Api_1.CustomerServiceV202309Api,
    CustomerServiceV202407Api: customerServiceV202407Api_1.CustomerServiceV202407Api,
    DataReconciliationV202309Api: dataReconciliationV202309Api_1.DataReconciliationV202309Api,
    DataReconciliationV202310Api: dataReconciliationV202310Api_1.DataReconciliationV202310Api,
    DataReconciliationV202401Api: dataReconciliationV202401Api_1.DataReconciliationV202401Api,
    EventV202309Api: eventV202309Api_1.EventV202309Api,
    FinanceV202309Api: financeV202309Api_1.FinanceV202309Api,
    FinanceV202501Api: financeV202501Api_1.FinanceV202501Api,
    FinanceV202507Api: financeV202507Api_1.FinanceV202507Api,
    FulfillmentV202309Api: fulfillmentV202309Api_1.FulfillmentV202309Api,
    FulfillmentV202407Api: fulfillmentV202407Api_1.FulfillmentV202407Api,
    FulfillmentV202502Api: fulfillmentV202502Api_1.FulfillmentV202502Api,
    FulfillmentV202508Api: fulfillmentV202508Api_1.FulfillmentV202508Api,
    FulfillmentV202510Api: fulfillmentV202510Api_1.FulfillmentV202510Api,
    LogisticsV202309Api: logisticsV202309Api_1.LogisticsV202309Api,
    LogisticsV202510Api: logisticsV202510Api_1.LogisticsV202510Api,
    OpenV202512Api: openV202512Api_1.OpenV202512Api,
    OrderV202309Api: orderV202309Api_1.OrderV202309Api,
    OrderV202407Api: orderV202407Api_1.OrderV202407Api,
    OrderV202507Api: orderV202507Api_1.OrderV202507Api,
    OrderV202511Api: orderV202511Api_1.OrderV202511Api,
    ProductV202309Api: productV202309Api_1.ProductV202309Api,
    ProductV202312Api: productV202312Api_1.ProductV202312Api,
    ProductV202401Api: productV202401Api_1.ProductV202401Api,
    ProductV202404Api: productV202404Api_1.ProductV202404Api,
    ProductV202405Api: productV202405Api_1.ProductV202405Api,
    ProductV202407Api: productV202407Api_1.ProductV202407Api,
    ProductV202409Api: productV202409Api_1.ProductV202409Api,
    ProductV202411Api: productV202411Api_1.ProductV202411Api,
    ProductV202501Api: productV202501Api_1.ProductV202501Api,
    ProductV202502Api: productV202502Api_1.ProductV202502Api,
    ProductV202505Api: productV202505Api_1.ProductV202505Api,
    ProductV202506Api: productV202506Api_1.ProductV202506Api,
    ProductV202507Api: productV202507Api_1.ProductV202507Api,
    ProductV202509Api: productV202509Api_1.ProductV202509Api,
    PromotionV202309Api: promotionV202309Api_1.PromotionV202309Api,
    PromotionV202406Api: promotionV202406Api_1.PromotionV202406Api,
    ReturnRefundV202309Api: returnRefundV202309Api_1.ReturnRefundV202309Api,
    SellerV202309Api: sellerV202309Api_1.SellerV202309Api,
    SupplyChainV202309Api: supplyChainV202309Api_1.SupplyChainV202309Api
};
exports.API_OPERATION_NAME_MAP = {
    AffiliateCreatorV202405Api: affiliateCreatorV202405Api_1.AffiliateCreatorV202405ApiOperationNames,
    AffiliateCreatorV202407Api: affiliateCreatorV202407Api_1.AffiliateCreatorV202407ApiOperationNames,
    AffiliateCreatorV202409Api: affiliateCreatorV202409Api_1.AffiliateCreatorV202409ApiOperationNames,
    AffiliateCreatorV202410Api: affiliateCreatorV202410Api_1.AffiliateCreatorV202410ApiOperationNames,
    AffiliateCreatorV202412Api: affiliateCreatorV202412Api_1.AffiliateCreatorV202412ApiOperationNames,
    AffiliateCreatorV202501Api: affiliateCreatorV202501Api_1.AffiliateCreatorV202501ApiOperationNames,
    AffiliateCreatorV202508Api: affiliateCreatorV202508Api_1.AffiliateCreatorV202508ApiOperationNames,
    AffiliateCreatorV202509Api: affiliateCreatorV202509Api_1.AffiliateCreatorV202509ApiOperationNames,
    AffiliateCreatorV202512Api: affiliateCreatorV202512Api_1.AffiliateCreatorV202512ApiOperationNames,
    AffiliatePartnerV202405Api: affiliatePartnerV202405Api_1.AffiliatePartnerV202405ApiOperationNames,
    AffiliatePartnerV202411Api: affiliatePartnerV202411Api_1.AffiliatePartnerV202411ApiOperationNames,
    AffiliatePartnerV202501Api: affiliatePartnerV202501Api_1.AffiliatePartnerV202501ApiOperationNames,
    AffiliatePartnerV202505Api: affiliatePartnerV202505Api_1.AffiliatePartnerV202505ApiOperationNames,
    AffiliatePartnerV202508Api: affiliatePartnerV202508Api_1.AffiliatePartnerV202508ApiOperationNames,
    AffiliateSellerV202405Api: affiliateSellerV202405Api_1.AffiliateSellerV202405ApiOperationNames,
    AffiliateSellerV202406Api: affiliateSellerV202406Api_1.AffiliateSellerV202406ApiOperationNames,
    AffiliateSellerV202409Api: affiliateSellerV202409Api_1.AffiliateSellerV202409ApiOperationNames,
    AffiliateSellerV202410Api: affiliateSellerV202410Api_1.AffiliateSellerV202410ApiOperationNames,
    AffiliateSellerV202412Api: affiliateSellerV202412Api_1.AffiliateSellerV202412ApiOperationNames,
    AffiliateSellerV202505Api: affiliateSellerV202505Api_1.AffiliateSellerV202505ApiOperationNames,
    AffiliateSellerV202507Api: affiliateSellerV202507Api_1.AffiliateSellerV202507ApiOperationNames,
    AffiliateSellerV202508Api: affiliateSellerV202508Api_1.AffiliateSellerV202508ApiOperationNames,
    AffiliateSellerV202509Api: affiliateSellerV202509Api_1.AffiliateSellerV202509ApiOperationNames,
    AffiliateSellerV202511Api: affiliateSellerV202511Api_1.AffiliateSellerV202511ApiOperationNames,
    AffiliateSellerV202512Api: affiliateSellerV202512Api_1.AffiliateSellerV202512ApiOperationNames,
    AffiliateV202309Api: affiliateV202309Api_1.AffiliateV202309ApiOperationNames,
    AffiliateV202402Api: affiliateV202402Api_1.AffiliateV202402ApiOperationNames,
    AffiliateV202403Api: affiliateV202403Api_1.AffiliateV202403ApiOperationNames,
    AnalyticsV202405Api: analyticsV202405Api_1.AnalyticsV202405ApiOperationNames,
    AnalyticsV202406Api: analyticsV202406Api_1.AnalyticsV202406ApiOperationNames,
    AnalyticsV202409Api: analyticsV202409Api_1.AnalyticsV202409ApiOperationNames,
    AnalyticsV202508Api: analyticsV202508Api_1.AnalyticsV202508ApiOperationNames,
    AuthorizationV202309Api: authorizationV202309Api_1.AuthorizationV202309ApiOperationNames,
    AuthorizationV202312Api: authorizationV202312Api_1.AuthorizationV202312ApiOperationNames,
    AuthorizationV202401Api: authorizationV202401Api_1.AuthorizationV202401ApiOperationNames,
    AuthorizationV202403Api: authorizationV202403Api_1.AuthorizationV202403ApiOperationNames,
    AuthorizationV202405Api: authorizationV202405Api_1.AuthorizationV202405ApiOperationNames,
    CustomerServiceV202309Api: customerServiceV202309Api_1.CustomerServiceV202309ApiOperationNames,
    CustomerServiceV202407Api: customerServiceV202407Api_1.CustomerServiceV202407ApiOperationNames,
    DataReconciliationV202309Api: dataReconciliationV202309Api_1.DataReconciliationV202309ApiOperationNames,
    DataReconciliationV202310Api: dataReconciliationV202310Api_1.DataReconciliationV202310ApiOperationNames,
    DataReconciliationV202401Api: dataReconciliationV202401Api_1.DataReconciliationV202401ApiOperationNames,
    EventV202309Api: eventV202309Api_1.EventV202309ApiOperationNames,
    FinanceV202309Api: financeV202309Api_1.FinanceV202309ApiOperationNames,
    FinanceV202501Api: financeV202501Api_1.FinanceV202501ApiOperationNames,
    FinanceV202507Api: financeV202507Api_1.FinanceV202507ApiOperationNames,
    FulfillmentV202309Api: fulfillmentV202309Api_1.FulfillmentV202309ApiOperationNames,
    FulfillmentV202407Api: fulfillmentV202407Api_1.FulfillmentV202407ApiOperationNames,
    FulfillmentV202502Api: fulfillmentV202502Api_1.FulfillmentV202502ApiOperationNames,
    FulfillmentV202508Api: fulfillmentV202508Api_1.FulfillmentV202508ApiOperationNames,
    FulfillmentV202510Api: fulfillmentV202510Api_1.FulfillmentV202510ApiOperationNames,
    LogisticsV202309Api: logisticsV202309Api_1.LogisticsV202309ApiOperationNames,
    LogisticsV202510Api: logisticsV202510Api_1.LogisticsV202510ApiOperationNames,
    OpenV202512Api: openV202512Api_1.OpenV202512ApiOperationNames,
    OrderV202309Api: orderV202309Api_1.OrderV202309ApiOperationNames,
    OrderV202407Api: orderV202407Api_1.OrderV202407ApiOperationNames,
    OrderV202507Api: orderV202507Api_1.OrderV202507ApiOperationNames,
    OrderV202511Api: orderV202511Api_1.OrderV202511ApiOperationNames,
    ProductV202309Api: productV202309Api_1.ProductV202309ApiOperationNames,
    ProductV202312Api: productV202312Api_1.ProductV202312ApiOperationNames,
    ProductV202401Api: productV202401Api_1.ProductV202401ApiOperationNames,
    ProductV202404Api: productV202404Api_1.ProductV202404ApiOperationNames,
    ProductV202405Api: productV202405Api_1.ProductV202405ApiOperationNames,
    ProductV202407Api: productV202407Api_1.ProductV202407ApiOperationNames,
    ProductV202409Api: productV202409Api_1.ProductV202409ApiOperationNames,
    ProductV202411Api: productV202411Api_1.ProductV202411ApiOperationNames,
    ProductV202501Api: productV202501Api_1.ProductV202501ApiOperationNames,
    ProductV202502Api: productV202502Api_1.ProductV202502ApiOperationNames,
    ProductV202505Api: productV202505Api_1.ProductV202505ApiOperationNames,
    ProductV202506Api: productV202506Api_1.ProductV202506ApiOperationNames,
    ProductV202507Api: productV202507Api_1.ProductV202507ApiOperationNames,
    ProductV202509Api: productV202509Api_1.ProductV202509ApiOperationNames,
    PromotionV202309Api: promotionV202309Api_1.PromotionV202309ApiOperationNames,
    PromotionV202406Api: promotionV202406Api_1.PromotionV202406ApiOperationNames,
    ReturnRefundV202309Api: returnRefundV202309Api_1.ReturnRefundV202309ApiOperationNames,
    SellerV202309Api: sellerV202309Api_1.SellerV202309ApiOperationNames,
    SupplyChainV202309Api: supplyChainV202309Api_1.SupplyChainV202309ApiOperationNames
};
//# sourceMappingURL=apis.js.map