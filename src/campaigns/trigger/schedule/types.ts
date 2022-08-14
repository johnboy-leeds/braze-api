import type { CampaignsTriggerSendObject } from '../types'

/**
 * Request body for schedule API-triggered campaigns.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_schedule_triggered_campaigns/#request-body}
 */
export interface CampaignsTriggerScheduleCreateObject extends CampaignsTriggerSendObject {
  schedule: Schedule
}

/**
 * Request body for delete scheduled API-triggered campaigns.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_delete_scheduled_triggered_messages/#request-body}
 */
export interface CampaignsTriggerScheduleDeleteObject {
  campaign_id: string
  schedule_id: string
}

/**
 * Request body for update scheduled API-triggered campaigns.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_update_scheduled_triggered_campaigns/#request-body}
 */
export interface CampaignsTriggerScheduleUpdateObject {
  campaign_id: string
  schedule_id: string
  schedule: Schedule
}

/**
 * Schedule object specification.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/schedule_object/}
 */
interface Schedule {
  time: string
  in_local_time?: boolean
  at_optimal_time?: boolean
}
