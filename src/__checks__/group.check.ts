import { CheckGroup, ApiCheck } from '@checkly/cli/constructs'
import { smsChannel, emailChannel } from '../alert-channels'
const alertChannels = [smsChannel, emailChannel]
/*
* In this example, we bundle checks using a Check Group. We add checks to this group in two ways:
* 1. By calling the ref() method for the groupId property of the check.
* 2. By defining a glob pattern that matches browser checks using *.spec.js.
*
* You can use either or both.
*/

// We can define multiple checks in a single *.check.js file.
const group1 = new CheckGroup('check-group-1', {
  name: 'OpenBanking - Accounts & Transactions',
  activated: true,
  muted: false,
  runtimeId: '2022.10',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  browserCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  browserChecks: {
    testMatch: 'some-dir/*.spec.ts'
  }
})

const group2 = new CheckGroup('check-group-2', {
  name: 'OpenBanking - Payments',
  activated: true,
  muted: false,
  runtimeId: '2022.10',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  browserCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  browserChecks: {
    testMatch: 'some-dir/*.spec.ts'
  }
})

const group3 = new CheckGroup('check-group-3', {
  name: 'OpenBanking - Customers',
  activated: true,
  muted: false,
  runtimeId: '2022.10',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  browserCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  browserChecks: {
    testMatch: 'some-dir/*.spec.ts'
  }
})

new ApiCheck('check-group-api-check-1', {
  name: 'GET /v2/accounts/details',
  groupId: group1.ref(),
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-stats',
    followRedirects: true,
    skipSsl: false,
    assertions: []
  }
})

new ApiCheck('check-group-api-check-2', {
  name: 'GET /v2/accounts/{accountId}/transactions',
  groupId: group1.ref(),
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-stats',
    followRedirects: true,
    skipSsl: false,
    assertions: []
  }
})

new ApiCheck('check-group-api-check-3', {
  name: 'GET /v2/accounts/{accountId}/encrypt/accountRoutingNumber',
  groupId: group1.ref(),
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-stats',
    followRedirects: true,
    skipSsl: false,
    assertions: []
  }
})

new ApiCheck('check-group-api-check-5', {
  name: '/v1/customers/{accountId}/profiles',
  groupId: group2.ref(),
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-stats',
    followRedirects: true,
    skipSsl: false,
    assertions: []
  }
})

new ApiCheck('check-group-api-check-6', {
  name: '/v1/customers/{accountId}/profiles',
  groupId: group3.ref(),
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-stats',
    followRedirects: true,
    skipSsl: false,
    assertions: []
  }
})