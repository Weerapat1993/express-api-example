# Features

## Folder Structure

```t
./src/features/request
├── detail
│   ├── components
│   │   └── index.js
│   ├── RequestDetailContainer.js
│   ├── index.js
│   ├── requestDetailActions.js
│   └── requestDetailReducer.js
├── list
│   ├── components
│   │   └── index.js
│   ├── RequestListContainer.js
│   ├── index.js
│   ├── requestListActions.js
│   └── requestListReducer.js
└── index.js
```

```t
./src/features/refund
├── payment
│   ├── components
│   │   └── index.js
│   └── index.js
├── policy
│   ├── components
│   │   ├── RefundPolicy.js
│   │   └── index.js
│   └── index.js
├── process
│   ├── components
│   │   └── index.js
│   ├── RefundProcessContainer.js
│   └── index.js
├── request
│   ├── components
│   │   └── index.js
│   └── index.js
├── summary
│   ├── components
│   │   └── index.js
│   ├── RefundSummaryContainer.js
│   └── index.js
├── reject
│   ├── components
│   │   └── index.js
│   ├── RefundRejectContainer.js
│   └── index.js
└── index.js
```

* `Request`
  * Lists 1
  * Detail
    * Status `Request Status` 2
    * Order `Order Request Detail` 3
    * History `Request History` 4
* `Refund`
  * Policy - `text`
  * Request `<FormWizard /> (mascot)` 5
  * Process - `Form` - BB 6
  * Summary - `Feature Topup` 7
  * Payment
    * Info - `text`
    * Completed - `text`


## Order / Purchase Detail Status (Team P'Gun)

* `Processing` - Buyer
* `Shipping` - Seller
* `Delivered`

## Request Status

* `Pending` => `Completed` Seller approved don't want return items > refund
  * `Processing` - Seller approved want return items
    * `Completed` - Seller approved returned items and refunded 
      * `Refunded` - order / purchase detail status updated when refund request status is complete
    * `Cancelled` - Buyer Cancelled
    * `Rejected` - Seller Cancelled
