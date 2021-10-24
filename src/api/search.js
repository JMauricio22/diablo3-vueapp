import { get } from 'axios'
import store from '@/store'

// https://{region}.api.blizzard.com, where {region} is one of us | eu | kr | tw
const protocol = 'https://'
const host = '.api.blizzard.com/'
/**
 * Returns the specified account profile.
 * GET – /d3/profile/{account}
 * @param region {String}
 * @param account {String}
 * @returns {Promise}
 */

export function getApiAccount ({ region, account }) {
  const resource = `d3/profile/${account}/`
  const API_URL = `${protocol}${region}${host}${resource}`

  const params = {
    access_token: store.state.oauth.accessToken,
    locale: 'en_US'
  }

  return get(API_URL, { params })
}

/**
 * Returns a single hero
 * GET – /d3/profile/{account}/hero/{heroId}
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
export function getApiHero ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`
  const API_URL = `${protocol}${region}${host}${resource}`

  const params = {
    access_token: store.state.oauth.accessToken,
    locale: 'en_US'
  }

  return get(API_URL, { params })
}

/**
 * Returns a list of items for the specified hero.
 * GET – /d3/profile/{account}/hero/{heroId}/items
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
export function getApiDetailedHeroItems ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`
  const API_URL = `${protocol}${region}${host}${resource}`

  const params = {
    access_token: store.state.oauth.accessToken,
    locale: 'en_US'
  }

  return get(API_URL, { params })
}
