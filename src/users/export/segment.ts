import { post } from '../../common/request'
import type { UsersExportSegmentObject, UsersExportSegmentResponse } from './types'

/**
 * Users by segment endpoint.
 *
 * This endpoint allows you to export all the users within a segment.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_segment/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function segment(apiUrl: string, apiKey: string, body: UsersExportSegmentObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(
    `${apiUrl}/users/export/segment`,
    body,
    options,
  ) as Promise<UsersExportSegmentResponse>
}
