import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({
        url: `/login`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    facebookLogin: build.mutation<
      FacebookLoginApiResponse,
      FacebookLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/facebook-login`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    googleLogin: build.mutation<GoogleLoginApiResponse, GoogleLoginApiArg>({
      query: (queryArg) => ({
        url: `/google-login`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    logout: build.mutation<LogoutApiResponse, LogoutApiArg>({
      query: () => ({ url: `/logout`, method: "POST" }),
    }),
    postUsersForgotPassword: build.mutation<
      PostUsersForgotPasswordApiResponse,
      PostUsersForgotPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/users/forgot-password`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        params: { usersSelected: queryArg.usersSelected },
      }),
    }),
    postUsers: build.mutation<PostUsersApiResponse, PostUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    patchUsers: build.mutation<PatchUsersApiResponse, PatchUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    getUsersToValidate: build.query<
      GetUsersToValidateApiResponse,
      GetUsersToValidateApiArg
    >({
      query: () => ({ url: `/users/to-validate` }),
    }),
    getGeneralStatistics: build.query<
      GetGeneralStatisticsApiResponse,
      GetGeneralStatisticsApiArg
    >({
      query: () => ({ url: `/statistics/general` }),
    }),
    getUserStatistics: build.query<
      GetUserStatisticsApiResponse,
      GetUserStatisticsApiArg
    >({
      query: () => ({ url: `/statistics/general-information/dashboard` }),
    }),
    getStatisticsPlatformUsersDashboard: build.query<
      GetStatisticsPlatformUsersDashboardApiResponse,
      GetStatisticsPlatformUsersDashboardApiArg
    >({
      query: () => ({ url: `/statistics/platform-users/dashboard` }),
    }),
    getSocialNetworksStatistics: build.query<
      GetSocialNetworksStatisticsApiResponse,
      GetSocialNetworksStatisticsApiArg
    >({
      query: () => ({ url: `/statistics/social-networks/dashboard` }),
    }),
    getCampaigns: build.query<GetCampaignsApiResponse, GetCampaignsApiArg>({
      query: () => ({ url: `/campaigns` }),
    }),
    createCampaign: build.mutation<
      CreateCampaignApiResponse,
      CreateCampaignApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns`,
        method: "POST",
        body: queryArg.campaignItemForCreate,
      }),
    }),
    updateOneCampaign: build.mutation<
      UpdateOneCampaignApiResponse,
      UpdateOneCampaignApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.campaignId}`,
        method: "PATCH",
        body: queryArg.campaignItemForCreate,
      }),
    }),
    deleteCampaignsByCampaignId: build.mutation<
      DeleteCampaignsByCampaignIdApiResponse,
      DeleteCampaignsByCampaignIdApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.campaignId}`,
        method: "DELETE",
      }),
    }),
    getStatisticsSocialNetworksFilterByTargeting: build.query<
      GetStatisticsSocialNetworksFilterByTargetingApiResponse,
      GetStatisticsSocialNetworksFilterByTargetingApiArg
    >({
      query: (queryArg) => ({
        url: `/statistics/social-networks/filter-by-targeting`,
        params: {
          gender: queryArg.gender,
          campaignsIncluded: queryArg.campaignsIncluded,
          campaignsExcluded: queryArg.campaignsExcluded,
          engagementRate: queryArg.engagementRate,
          rating: queryArg.rating,
          interests: queryArg.interests,
          ages: queryArg.ages,
          instagramMinFollowers: queryArg.instagramMinFollowers,
          instagramMaxFollowers: queryArg.instagramMaxFollowers,
          youtubeMinFollowers: queryArg.youtubeMinFollowers,
          youtubeMaxFollowers: queryArg.youtubeMaxFollowers,
          tikTokMinFollowers: queryArg.tikTokMinFollowers,
          tikTokMaxFollowers: queryArg.tikTokMaxFollowers,
          blogMinFollowers: queryArg.blogMinFollowers,
          blogMaxFollowers: queryArg.blogMaxFollowers,
          countryIncluded: queryArg.countryIncluded,
          countryExcluded: queryArg.countryExcluded,
          regionsIncluded: queryArg.regionsIncluded,
          regionsExcluded: queryArg.regionsExcluded,
          cityIncluded: queryArg.cityIncluded,
          cityExcluded: queryArg.cityExcluded,
          clubsExcluded: queryArg.clubsExcluded,
          clubsIncluded: queryArg.clubsIncluded,
          usersIncluded: queryArg.usersIncluded,
          usersExcluded: queryArg.usersExcluded,
        },
      }),
    }),
    postStatisticsSocialNetworksFilterByTargeting: build.mutation<
      PostStatisticsSocialNetworksFilterByTargetingApiResponse,
      PostStatisticsSocialNetworksFilterByTargetingApiArg
    >({
      query: (queryArg) => ({
        url: `/statistics/social-networks/filter-by-targeting`,
        method: "POST",
        body: queryArg.targetingBody,
      }),
    }),
    getIncludedUsersListByFilter: build.query<
      GetIncludedUsersListByFilterApiResponse,
      GetIncludedUsersListByFilterApiArg
    >({
      query: (queryArg) => ({
        url: `/users/find-by-filter/list-of-users`,
        params: {
          includedUsersList: queryArg.includedUsersList,
          gender: queryArg.gender,
          campaignsIncluded: queryArg.campaignsIncluded,
          campaignsExcluded: queryArg.campaignsExcluded,
          engagementRate: queryArg.engagementRate,
          rating: queryArg.rating,
          interests: queryArg.interests,
          ages: queryArg.ages,
          instagramMinFollowers: queryArg.instagramMinFollowers,
          instagramMaxFollowers: queryArg.instagramMaxFollowers,
          youtubeMaxFollowers: queryArg.youtubeMaxFollowers,
          tikTokMinFollowers: queryArg.tikTokMinFollowers,
          tikTokMaxFollowers: queryArg.tikTokMaxFollowers,
          blogMinFollowers: queryArg.blogMinFollowers,
          blogMaxFollowers: queryArg.blogMaxFollowers,
          countryIncluded: queryArg.countryIncluded,
          countryExcluded: queryArg.countryExcluded,
          regionsIncluded: queryArg.regionsIncluded,
          regionsExcluded: queryArg.regionsExcluded,
          cityIncluded: queryArg.cityIncluded,
          cityExcluded: queryArg.cityExcluded,
          usersIncluded: queryArg.usersIncluded,
          usersExcluded: queryArg.usersExcluded,
        },
      }),
    }),
    getCampaignsByCampaignIdTargeting: build.query<
      GetCampaignsByCampaignIdTargetingApiResponse,
      GetCampaignsByCampaignIdTargetingApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.campaignId}/targeting`,
      }),
    }),
    postCampaignsByCampaignIdTargeting: build.mutation<
      PostCampaignsByCampaignIdTargetingApiResponse,
      PostCampaignsByCampaignIdTargetingApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.campaignId}/targeting`,
        method: "POST",
        body: queryArg.targetingBody,
      }),
    }),
    updateFilterInformationForTargeting: build.mutation<
      UpdateFilterInformationForTargetingApiResponse,
      UpdateFilterInformationForTargetingApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.campaignId}/targeting`,
        method: "PATCH",
        body: queryArg.targetingBody,
      }),
    }),
    getUsersByUserIdOrdersStatisticsAndOrderId: build.query<
      GetUsersByUserIdOrdersStatisticsAndOrderIdApiResponse,
      GetUsersByUserIdOrdersStatisticsAndOrderIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders-statistics/${queryArg.orderId}`,
      }),
    }),
    getOrders: build.query<GetOrdersApiResponse, GetOrdersApiArg>({
      query: (queryArg) => ({
        url: `/orders`,
        params: {
          status: queryArg.status,
          brandId: queryArg.brandId,
          campaignId: queryArg.campaignId,
          search: queryArg.search,
        },
      }),
    }),
    postOrders: build.mutation<PostOrdersApiResponse, PostOrdersApiArg>({
      query: (queryArg) => ({
        url: `/orders`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    updateOrder: build.mutation<UpdateOrderApiResponse, UpdateOrderApiArg>({
      query: (queryArg) => ({
        url: `/orders/${queryArg.orderId}`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    deleteOrdersByOrderId: build.mutation<
      DeleteOrdersByOrderIdApiResponse,
      DeleteOrdersByOrderIdApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.orderId}`,
        method: "DELETE",
      }),
    }),
    patchMediasByMediaId: build.mutation<
      PatchMediasByMediaIdApiResponse,
      PatchMediasByMediaIdApiArg
    >({
      query: (queryArg) => ({
        url: `/medias/${queryArg.mediaId}`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    getCampaignsByCampaignIdReporting: build.query<
      GetCampaignsByCampaignIdReportingApiResponse,
      GetCampaignsByCampaignIdReportingApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.campaignId}/reporting`,
      }),
    }),
    getUsersByUserId: build.query<
      GetUsersByUserIdApiResponse,
      GetUsersByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}` }),
    }),
    getUsersAdminByUserId: build.query<
      GetUsersAdminByUserIdApiResponse,
      GetUsersAdminByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/admin/${queryArg.userId}` }),
    }),
    patchUsersByUserIdGeneral: build.mutation<
      PatchUsersByUserIdGeneralApiResponse,
      PatchUsersByUserIdGeneralApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/general`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdNotifications: build.mutation<
      PatchUsersByUserIdNotificationsApiResponse,
      PatchUsersByUserIdNotificationsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/notifications`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdSocialNetworkLinks: build.mutation<
      PatchUsersByUserIdSocialNetworkLinksApiResponse,
      PatchUsersByUserIdSocialNetworkLinksApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/social-network-links`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdPassword: build.mutation<
      PatchUsersByUserIdPasswordApiResponse,
      PatchUsersByUserIdPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/password`,
        method: "PATCH",
        body: queryArg.body,
        params: { "send-to-user": queryArg["send-to-user"] },
      }),
    }),
    patchUsersByUserIdStatus: build.mutation<
      PatchUsersByUserIdStatusApiResponse,
      PatchUsersByUserIdStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/status`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdEmail: build.mutation<
      PatchUsersByUserIdEmailApiResponse,
      PatchUsersByUserIdEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/email`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdPhoneNumber: build.mutation<
      PatchUsersByUserIdPhoneNumberApiResponse,
      PatchUsersByUserIdPhoneNumberApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/phone-number`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    createNewAddressForOneUser: build.mutation<
      CreateNewAddressForOneUserApiResponse,
      CreateNewAddressForOneUserApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/addresses`,
        method: "POST",
        body: queryArg.addressItemPost,
      }),
    }),
    updateOneUserAddress: build.mutation<
      UpdateOneUserAddressApiResponse,
      UpdateOneUserAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/addresses/${queryArg.addressId}`,
        method: "PUT",
        body: queryArg.addressItem,
      }),
    }),
    deleteOneUserAddress: build.mutation<
      DeleteOneUserAddressApiResponse,
      DeleteOneUserAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/addresses/${queryArg.addressId}`,
        method: "DELETE",
      }),
    }),
    getUserRatings: build.query<
      GetUserRatingsApiResponse,
      GetUserRatingsApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}/ratings` }),
    }),
    createRating: build.mutation<CreateRatingApiResponse, CreateRatingApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/ratings`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUsersByUserIdRatingsAndRatingId: build.query<
      GetUsersByUserIdRatingsAndRatingIdApiResponse,
      GetUsersByUserIdRatingsAndRatingIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/ratings/${queryArg.ratingId}`,
      }),
    }),
    putUsersByUserIdRatingsAndRatingId: build.mutation<
      PutUsersByUserIdRatingsAndRatingIdApiResponse,
      PutUsersByUserIdRatingsAndRatingIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/ratings/${queryArg.ratingId}`,
        method: "PUT",
        body: queryArg.ratingItem,
      }),
    }),
    deleteUsersByUserIdRatingsAndRatingId: build.mutation<
      DeleteUsersByUserIdRatingsAndRatingIdApiResponse,
      DeleteUsersByUserIdRatingsAndRatingIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/ratings/${queryArg.ratingId}`,
        method: "DELETE",
      }),
    }),
    getBrands: build.query<GetBrandsApiResponse, GetBrandsApiArg>({
      query: () => ({ url: `/brands` }),
    }),
    createBrands: build.mutation<CreateBrandsApiResponse, CreateBrandsApiArg>({
      query: (queryArg) => ({
        url: `/brands`,
        method: "POST",
        body: queryArg.brandPostPatchItem,
      }),
    }),
    getBrandsCreateCampaign: build.query<
      GetBrandsCreateCampaignApiResponse,
      GetBrandsCreateCampaignApiArg
    >({
      query: () => ({ url: `/brands/create-campaign` }),
    }),
    getOneBrand: build.query<GetOneBrandApiResponse, GetOneBrandApiArg>({
      query: (queryArg) => ({ url: `/brands/${queryArg.brandId}` }),
    }),
    updateBrand: build.mutation<UpdateBrandApiResponse, UpdateBrandApiArg>({
      query: (queryArg) => ({
        url: `/brands/${queryArg.brandId}`,
        method: "PATCH",
        body: queryArg.brandPostPatchItem,
      }),
    }),
    patchBrandsByBrandIdNotifications: build.mutation<
      PatchBrandsByBrandIdNotificationsApiResponse,
      PatchBrandsByBrandIdNotificationsApiArg
    >({
      query: (queryArg) => ({
        url: `/brands/${queryArg.brandId}/notifications`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    patchBrandsByBrandIdSocialNetworkLinks: build.mutation<
      PatchBrandsByBrandIdSocialNetworkLinksApiResponse,
      PatchBrandsByBrandIdSocialNetworkLinksApiArg
    >({
      query: (queryArg) => ({
        url: `/brands/${queryArg.brandId}/social-network-links`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    updateOneBrandPassword: build.mutation<
      UpdateOneBrandPasswordApiResponse,
      UpdateOneBrandPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/brands/${queryArg.brandId}/password`,
        method: "PATCH",
        body: queryArg.body,
        params: { "send-to-brand": queryArg["send-to-brand"] },
      }),
    }),
    getClubs: build.query<GetClubsApiResponse, GetClubsApiArg>({
      query: () => ({ url: `/clubs` }),
    }),
    postClubs: build.mutation<PostClubsApiResponse, PostClubsApiArg>({
      query: (queryArg) => ({
        url: `/clubs`,
        method: "POST",
        body: queryArg.clubItemForPost,
      }),
    }),
    patchClubsByClubId: build.mutation<
      PatchClubsByClubIdApiResponse,
      PatchClubsByClubIdApiArg
    >({
      query: (queryArg) => ({
        url: `/clubs/${queryArg.clubId}`,
        method: "PATCH",
        body: queryArg.clubItemForPost,
      }),
    }),
    getClubsByClubId: build.query<
      GetClubsByClubIdApiResponse,
      GetClubsByClubIdApiArg
    >({
      query: (queryArg) => ({ url: `/clubs/${queryArg.clubId}` }),
    }),
    deleteClubsByClubId: build.mutation<
      DeleteClubsByClubIdApiResponse,
      DeleteClubsByClubIdApiArg
    >({
      query: (queryArg) => ({
        url: `/clubs/${queryArg.clubId}`,
        method: "DELETE",
      }),
    }),
    getClubsByClubIdStatistics: build.query<
      GetClubsByClubIdStatisticsApiResponse,
      GetClubsByClubIdStatisticsApiArg
    >({
      query: (queryArg) => ({ url: `/clubs/${queryArg.clubId}/statistics` }),
    }),
    getClubsByClubIdUsers: build.query<
      GetClubsByClubIdUsersApiResponse,
      GetClubsByClubIdUsersApiArg
    >({
      query: (queryArg) => ({ url: `/clubs/${queryArg.clubId}/users` }),
    }),
    patchClubsByClubIdUsers: build.mutation<
      PatchClubsByClubIdUsersApiResponse,
      PatchClubsByClubIdUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/clubs/${queryArg.clubId}/users`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    getChatUserByUserIdContacts: build.query<
      GetChatUserByUserIdContactsApiResponse,
      GetChatUserByUserIdContactsApiArg
    >({
      query: (queryArg) => ({
        url: `/chat/user/${queryArg.userId}/contacts`,
        params: { search: queryArg.search },
      }),
    }),
    getChatUserByUserIdConversations: build.query<
      GetChatUserByUserIdConversationsApiResponse,
      GetChatUserByUserIdConversationsApiArg
    >({
      query: (queryArg) => ({
        url: `/chat/user/${queryArg.userId}/conversations`,
      }),
    }),
    postChatUserByUserIdConversations: build.mutation<
      PostChatUserByUserIdConversationsApiResponse,
      PostChatUserByUserIdConversationsApiArg
    >({
      query: (queryArg) => ({
        url: `/chat/user/${queryArg.userId}/conversations`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getChatUserByUserIdConversationsAndConversationIdMessages: build.query<
      GetChatUserByUserIdConversationsAndConversationIdMessagesApiResponse,
      GetChatUserByUserIdConversationsAndConversationIdMessagesApiArg
    >({
      query: (queryArg) => ({
        url: `/chat/user/${queryArg.userId}/conversations/${queryArg.conversationId}/messages`,
      }),
    }),
    postChatUserByUserIdConversationsAndConversationIdMessages: build.mutation<
      PostChatUserByUserIdConversationsAndConversationIdMessagesApiResponse,
      PostChatUserByUserIdConversationsAndConversationIdMessagesApiArg
    >({
      query: (queryArg) => ({
        url: `/chat/user/${queryArg.userId}/conversations/${queryArg.conversationId}/messages`,
        method: "POST",
        body: queryArg.messageToSendItemForChat,
      }),
    }),
    postChatUserByUserIdConversationsAndConversationIdMarkAsRead:
      build.mutation<
        PostChatUserByUserIdConversationsAndConversationIdMarkAsReadApiResponse,
        PostChatUserByUserIdConversationsAndConversationIdMarkAsReadApiArg
      >({
        query: (queryArg) => ({
          url: `/chat/user/${queryArg.userId}/conversations/${queryArg.conversationId}/mark-as-read`,
          method: "POST",
        }),
      }),
    getInterests: build.query<GetInterestsApiResponse, GetInterestsApiArg>({
      query: () => ({ url: `/interests` }),
    }),
    getNotifications: build.query<
      GetNotificationsApiResponse,
      GetNotificationsApiArg
    >({
      query: () => ({ url: `/notifications` }),
    }),
    putNotificationsRead: build.mutation<
      PutNotificationsReadApiResponse,
      PutNotificationsReadApiArg
    >({
      query: (queryArg) => ({
        url: `/notifications/read`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    getIndustries: build.query<GetIndustriesApiResponse, GetIndustriesApiArg>({
      query: () => ({ url: `/industries` }),
    }),
    getIndustriesTest: build.query<
      GetIndustriesTestApiResponse,
      GetIndustriesTestApiArg
    >({
      query: () => ({ url: `/industries/test` }),
    }),
    getTags: build.query<GetTagsApiResponse, GetTagsApiArg>({
      query: () => ({ url: `/tags` }),
    }),
    getClubsClubnames: build.query<
      GetClubsClubnamesApiResponse,
      GetClubsClubnamesApiArg
    >({
      query: () => ({ url: `/clubs/clubnames` }),
    }),
    postUsersRegistration: build.mutation<
      PostUsersRegistrationApiResponse,
      PostUsersRegistrationApiArg
    >({
      query: (queryArg) => ({
        url: `/users/registration`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postUsersRegistrationByUserIdResendEmailCode: build.mutation<
      PostUsersRegistrationByUserIdResendEmailCodeApiResponse,
      PostUsersRegistrationByUserIdResendEmailCodeApiArg
    >({
      query: (queryArg) => ({
        url: `/users/registration/${queryArg.userId}/resend-email-code`,
        method: "POST",
      }),
    }),
    postUsersRegistrationByUserIdCheckEmail: build.mutation<
      PostUsersRegistrationByUserIdCheckEmailApiResponse,
      PostUsersRegistrationByUserIdCheckEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/users/registration/${queryArg.userId}/check-email`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postUsersRegistrationByUserIdGeneral: build.mutation<
      PostUsersRegistrationByUserIdGeneralApiResponse,
      PostUsersRegistrationByUserIdGeneralApiArg
    >({
      query: (queryArg) => ({
        url: `/users/registration/${queryArg.userId}/general`,
        method: "POST",
        body: queryArg.userItemForPostRegistrationGeneral,
      }),
    }),
    postUsersRegistrationByUserIdResendPhoneCode: build.mutation<
      PostUsersRegistrationByUserIdResendPhoneCodeApiResponse,
      PostUsersRegistrationByUserIdResendPhoneCodeApiArg
    >({
      query: (queryArg) => ({
        url: `/users/registration/${queryArg.userId}/resend-phone-code`,
        method: "POST",
      }),
    }),
    postUsersRegistrationByUserIdCheckPhoneNumber: build.mutation<
      PostUsersRegistrationByUserIdCheckPhoneNumberApiResponse,
      PostUsersRegistrationByUserIdCheckPhoneNumberApiArg
    >({
      query: (queryArg) => ({
        url: `/users/registration/${queryArg.userId}/check-phone-number`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUserCampaigns: build.query<
      GetUserCampaignsApiResponse,
      GetUserCampaignsApiArg
    >({
      query: () => ({ url: `/user-campaigns` }),
    }),
    getUserCampaignsByCampaignId: build.query<
      GetUserCampaignsByCampaignIdApiResponse,
      GetUserCampaignsByCampaignIdApiArg
    >({
      query: (queryArg) => ({ url: `/user-campaigns/${queryArg.campaignId}` }),
    }),
    getUsersByUserIdOrders: build.query<
      GetUsersByUserIdOrdersApiResponse,
      GetUsersByUserIdOrdersApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}/orders` }),
    }),
    getChatUsersByUserIdOrders: build.query<
      GetChatUsersByUserIdOrdersApiResponse,
      GetChatUsersByUserIdOrdersApiArg
    >({
      query: (queryArg) => ({ url: `/chat/users/${queryArg.userId}/orders` }),
    }),
    getUsersByUserIdMediasStatistics: build.query<
      GetUsersByUserIdMediasStatisticsApiResponse,
      GetUsersByUserIdMediasStatisticsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/medias-statistics`,
      }),
    }),
    getUsersByUserIdIgMedias: build.query<
      GetUsersByUserIdIgMediasApiResponse,
      GetUsersByUserIdIgMediasApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/ig-medias`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    getUsersByUserIdIgStories: build.query<
      GetUsersByUserIdIgStoriesApiResponse,
      GetUsersByUserIdIgStoriesApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/ig-stories`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    getUsersByUserIdIgReels: build.query<
      GetUsersByUserIdIgReelsApiResponse,
      GetUsersByUserIdIgReelsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/ig-reels`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    deleteOrdersByOrderIdMediasAndMediaId: build.mutation<
      DeleteOrdersByOrderIdMediasAndMediaIdApiResponse,
      DeleteOrdersByOrderIdMediasAndMediaIdApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.orderId}/medias/${queryArg.mediaId}`,
        method: "DELETE",
      }),
    }),
    getUsersByUserIdOrdersAndOrderIdIgMedias: build.query<
      GetUsersByUserIdOrdersAndOrderIdIgMediasApiResponse,
      GetUsersByUserIdOrdersAndOrderIdIgMediasApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-medias`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    postUsersByUserIdOrdersAndOrderIdIgMedias: build.mutation<
      PostUsersByUserIdOrdersAndOrderIdIgMediasApiResponse,
      PostUsersByUserIdOrdersAndOrderIdIgMediasApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-medias`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdOrdersAndOrderIdIgMedias: build.mutation<
      PatchUsersByUserIdOrdersAndOrderIdIgMediasApiResponse,
      PatchUsersByUserIdOrdersAndOrderIdIgMediasApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-medias`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    getUsersByUserIdOrdersAndOrderIdIgStories: build.query<
      GetUsersByUserIdOrdersAndOrderIdIgStoriesApiResponse,
      GetUsersByUserIdOrdersAndOrderIdIgStoriesApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-stories`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    postUsersByUserIdOrdersAndOrderIdIgStories: build.mutation<
      PostUsersByUserIdOrdersAndOrderIdIgStoriesApiResponse,
      PostUsersByUserIdOrdersAndOrderIdIgStoriesApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-stories`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdOrdersAndOrderIdIgStories: build.mutation<
      PatchUsersByUserIdOrdersAndOrderIdIgStoriesApiResponse,
      PatchUsersByUserIdOrdersAndOrderIdIgStoriesApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-stories`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    getUsersByUserIdOrdersAndOrderIdIgReels: build.query<
      GetUsersByUserIdOrdersAndOrderIdIgReelsApiResponse,
      GetUsersByUserIdOrdersAndOrderIdIgReelsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-reels`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    postUsersByUserIdOrdersAndOrderIdIgReels: build.mutation<
      PostUsersByUserIdOrdersAndOrderIdIgReelsApiResponse,
      PostUsersByUserIdOrdersAndOrderIdIgReelsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-reels`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    patchUsersByUserIdOrdersAndOrderIdIgReels: build.mutation<
      PatchUsersByUserIdOrdersAndOrderIdIgReelsApiResponse,
      PatchUsersByUserIdOrdersAndOrderIdIgReelsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/ig-reels`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    getUsersByUserIdYoutube: build.query<
      GetUsersByUserIdYoutubeApiResponse,
      GetUsersByUserIdYoutubeApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/youtube`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    getUsersByUserIdOrdersAndOrderIdYoutube: build.query<
      GetUsersByUserIdOrdersAndOrderIdYoutubeApiResponse,
      GetUsersByUserIdOrdersAndOrderIdYoutubeApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/youtube`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    postUsersByUserIdOrdersAndOrderIdYoutube: build.mutation<
      PostUsersByUserIdOrdersAndOrderIdYoutubeApiResponse,
      PostUsersByUserIdOrdersAndOrderIdYoutubeApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/youtube`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUsersByUserIdYoutubeShorts: build.query<
      GetUsersByUserIdYoutubeShortsApiResponse,
      GetUsersByUserIdYoutubeShortsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/youtube-shorts`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    getUsersByUserIdOrdersAndOrderIdYoutubeShorts: build.query<
      GetUsersByUserIdOrdersAndOrderIdYoutubeShortsApiResponse,
      GetUsersByUserIdOrdersAndOrderIdYoutubeShortsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/youtube-shorts`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    postUsersByUserIdOrdersAndOrderIdYoutubeShorts: build.mutation<
      PostUsersByUserIdOrdersAndOrderIdYoutubeShortsApiResponse,
      PostUsersByUserIdOrdersAndOrderIdYoutubeShortsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/youtube-shorts`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUsersByUserIdOrdersAndOrderIdTiktok: build.query<
      GetUsersByUserIdOrdersAndOrderIdTiktokApiResponse,
      GetUsersByUserIdOrdersAndOrderIdTiktokApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/tiktok`,
        params: { pagination: queryArg.pagination },
      }),
    }),
    postUsersByUserIdOrdersAndOrderIdTiktok: build.mutation<
      PostUsersByUserIdOrdersAndOrderIdTiktokApiResponse,
      PostUsersByUserIdOrdersAndOrderIdTiktokApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/tiktok`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUsersByUserIdOrdersAndOrderIdBlog: build.query<
      GetUsersByUserIdOrdersAndOrderIdBlogApiResponse,
      GetUsersByUserIdOrdersAndOrderIdBlogApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/blog`,
      }),
    }),
    postUsersByUserIdOrdersAndOrderIdBlog: build.mutation<
      PostUsersByUserIdOrdersAndOrderIdBlogApiResponse,
      PostUsersByUserIdOrdersAndOrderIdBlogApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/orders/${queryArg.orderId}/blog`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postUpload: build.mutation<PostUploadApiResponse, PostUploadApiArg>({
      query: (queryArg) => ({
        url: `/upload`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postRefreshToken: build.mutation<
      PostRefreshTokenApiResponse,
      PostRefreshTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/refresh-token`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postUsersResetPassword: build.mutation<
      PostUsersResetPasswordApiResponse,
      PostUsersResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/users/reset-password`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as coreApi };
export type LoginApiResponse = /** status 200 OK */ {
  user?: {
    id?: string;
    role?: "admin" | "brand" | "influencer";
  };
  token?: string;
  refreshToken?: string;
};
export type LoginApiArg = {
  /** A JSON Object containing user credential */
  body: {
    email?: string;
    password?: string;
  };
};
export type FacebookLoginApiResponse = /** status 200 OK */ {
  user?: {
    id?: string;
    role?: "admin" | "brand" | "influencer";
  };
  token?: string;
  refreshToken?: string;
};
export type FacebookLoginApiArg = {
  /** A JSON Object containing user credential */
  body: {
    userID?: string;
    accessToken?: string;
    data_access_expiration_time?: number;
    expiresIn?: number;
    graphDomain?: string;
    signedRequest?: string;
  };
};
export type GoogleLoginApiResponse = /** status 200 OK */ {
  user?: {
    id?: string;
    role?: "admin" | "brand" | "influencer";
  };
  token?: string;
  refreshToken?: string;
};
export type GoogleLoginApiArg = {
  /** A JSON Object containing user credential */
  body: {
    clientId?: string;
    credential?: string;
    accessToken?: string;
    expiresIn?: number;
  };
};
export type LogoutApiResponse = /** status 204 No Content */ {};
export type LogoutApiArg = void;
export type PostUsersForgotPasswordApiResponse = unknown;
export type PostUsersForgotPasswordApiArg = {
  /** User's email */
  body: {
    email?: string;
  };
};
export type GetUsersApiResponse = /** status 200 OK */ UserItemForUserList[];
export type GetUsersApiArg = {
  /** some userId selected by targeting filter */
  usersSelected?: string;
};
export type PostUsersApiResponse = /** status 200 OK */ {
  id?: string;
};
export type PostUsersApiArg = {
  body: {
    general?: {
      avatarUrl?: string;
      status?: UserStatus;
      gender?: "male" | "female" | "other";
      firstName?: string;
      lastName?: string;
      email?: string;
      phoneNumber?: string;
      interests?: Uuid[];
      tags?: TagList;
      clubs?: ClubNameList;
      notes?: string;
      phoneActivated?: boolean;
      mailActivated?: boolean;
      birthdate?: string;
    };
  };
};
export type PatchUsersApiResponse = unknown;
export type PatchUsersApiArg = {
  body: {
    ids?: Uuid[];
    method?: "delete";
  };
};
export type GetUsersToValidateApiResponse =
  /** status 200 OK */ UserItemForUserList[];
export type GetUsersToValidateApiArg = void;
export type GetGeneralStatisticsApiResponse = /** status 200 OK */ {
  requestsToValidate?: number;
  runningCampaigns?: number;
  newMessages?: number;
};
export type GetGeneralStatisticsApiArg = void;
export type GetUserStatisticsApiResponse = /** status 200 OK */ {
  usersToVerify?: number;
  requestsToValidate?: number;
  itemsToShip?: number;
  content?: {
    nbToValidate?: number;
    nbPosted?: number;
    postedPercent?: number;
    nbPending?: number;
    pendingPercent?: number;
  };
  totalView?: number;
  userActive?: ChartDataForStatistics;
  userSignup?: ChartDataForStatistics;
};
export type GetUserStatisticsApiArg = void;
export type GetStatisticsPlatformUsersDashboardApiResponse =
  /** status 200 OK */ {
    title?: string;
    data?: {
      name?: string;
      data?: number[];
    }[];
    labels?: string[];
  }[];
export type GetStatisticsPlatformUsersDashboardApiArg = void;
export type GetSocialNetworksStatisticsApiResponse =
  /** status 200 OK */ ChartDataForStatistics[];
export type GetSocialNetworksStatisticsApiArg = void;
export type GetCampaignsApiResponse =
  /** status 200 OK */ CampaignItemForListOfCampaigns[];
export type GetCampaignsApiArg = void;
export type CreateCampaignApiResponse = /** status 200 OK */ {
  id?: string;
};
export type CreateCampaignApiArg = {
  campaignItemForCreate: CampaignItemForCreateOrUpdateCampaign;
};
export type UpdateOneCampaignApiResponse = unknown;
export type UpdateOneCampaignApiArg = {
  /** ID of campaign to update */
  campaignId: string;
  campaignItemForCreate: CampaignItemForCreateOrUpdateCampaign;
};
export type DeleteCampaignsByCampaignIdApiResponse = unknown;
export type DeleteCampaignsByCampaignIdApiArg = {
  /** ID of campaign to update */
  campaignId: string;
};
export type GetStatisticsSocialNetworksFilterByTargetingApiResponse =
  /** status 200 OK */ {
    influencers?: ChartDataForStatisticsOfInfluencers;
    followers?: ChartDataForStatisticsFollowers;
    views?: ChartDataForStatisticsViews;
    engagements?: ChartDataForStatisticsEngagements;
  };
export type GetStatisticsSocialNetworksFilterByTargetingApiArg = {
  /** Gender */
  gender?: ("male" | "female" | "other")[];
  /** Campaigns included */
  campaignsIncluded?: string[];
  /** Campaigns excluded */
  campaignsExcluded?: string[];
  /** Engagement Rate */
  engagementRate?: number;
  /** Rating */
  rating?: number;
  /** Interests */
  interests?: string[];
  /** Ages */
  ages?: string[];
  /** Instagram minimum followers */
  instagramMinFollowers?: number;
  /** Instagram maximum followers */
  instagramMaxFollowers?: number;
  /** Youtube minimum followers */
  youtubeMinFollowers?: number;
  /** Youtube maximum followers */
  youtubeMaxFollowers?: number;
  /** TikTok minimum followers */
  tikTokMinFollowers?: number;
  /** TikTok maximum followers */
  tikTokMaxFollowers?: number;
  /** Blog minimum followers */
  blogMinFollowers?: number;
  /** Blog maximum followers */
  blogMaxFollowers?: number;
  /** Countries included */
  countryIncluded?: string[];
  /** Countries excluded */
  countryExcluded?: string[];
  /** Regions included */
  regionsIncluded?: string[];
  /** Regions excluded */
  regionsExcluded?: string[];
  /** Cities included */
  cityIncluded?: string[];
  /** Cities excluded */
  cityExcluded?: string[];
  /** Clubs excluded */
  clubsExcluded?: string[];
  /** Clubs included */
  clubsIncluded?: string[];
  /** Users included */
  usersIncluded?: string[];
  /** Users excluded */
  usersExcluded?: string[];
};
export type PostStatisticsSocialNetworksFilterByTargetingApiResponse =
  /** status 200 OK */ {
    influencers?: ChartDataForStatisticsOfInfluencers;
    followers?: ChartDataForStatisticsFollowers;
    views?: ChartDataForStatisticsViews;
    engagements?: ChartDataForStatisticsEngagements;
  };
export type PostStatisticsSocialNetworksFilterByTargetingApiArg = {
  targetingBody: TargetingBody;
};
export type GetIncludedUsersListByFilterApiResponse =
  /** status 200 OK */ UserItemForUserList[];
export type GetIncludedUsersListByFilterApiArg = {
  /** Users included */
  includedUsersList?: boolean;
  /** Gender */
  gender?: ("male" | "female" | "other")[];
  /** Campaigns included */
  campaignsIncluded?: string[];
  /** Campaigns excluded */
  campaignsExcluded?: string[];
  /** Engagement Rate */
  engagementRate?: number;
  /** Rating */
  rating?: number;
  /** Interests */
  interests?: string[];
  /** Ages */
  ages?: string[];
  /** Instagram minimum followers */
  instagramMinFollowers?: number;
  /** Instagram maximum followers */
  instagramMaxFollowers?: number;
  /** Youtube maximum followers */
  youtubeMaxFollowers?: number;
  /** TikTok minimum followers */
  tikTokMinFollowers?: number;
  /** TikTok maximum followers */
  tikTokMaxFollowers?: number;
  /** Blog minimum followers */
  blogMinFollowers?: number;
  /** Blog maximum followers */
  blogMaxFollowers?: number;
  /** Countries included */
  countryIncluded?: string[];
  /** Countries excluded */
  countryExcluded?: string[];
  /** Regions included */
  regionsIncluded?: string[];
  /** Regions excluded */
  regionsExcluded?: string[];
  /** Cities included */
  cityIncluded?: string[];
  /** Cities excluded */
  cityExcluded?: string[];
  /** Users included */
  usersIncluded?: string[];
  /** Users excluded */
  usersExcluded?: string[];
};
export type GetCampaignsByCampaignIdTargetingApiResponse =
  /** status 200 OK */ TargetingBody;
export type GetCampaignsByCampaignIdTargetingApiArg = {
  /** ID of campaign to update */
  campaignId: string;
};
export type PostCampaignsByCampaignIdTargetingApiResponse = unknown;
export type PostCampaignsByCampaignIdTargetingApiArg = {
  /** ID of campaign to update */
  campaignId: string;
  /** A JSON Object containing targeting informations */
  targetingBody: TargetingBody;
};
export type UpdateFilterInformationForTargetingApiResponse = unknown;
export type UpdateFilterInformationForTargetingApiArg = {
  /** ID of campaign to update */
  campaignId: string;
  /** A JSON Object containing targeting informations */
  targetingBody: TargetingBody;
};
export type GetUsersByUserIdOrdersStatisticsAndOrderIdApiResponse =
  /** status 200 OK */ UserItemForManageCampaignPage;
export type GetUsersByUserIdOrdersStatisticsAndOrderIdApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
};
export type GetOrdersApiResponse =
  /** status 200 OK */ OrderItemForManageCampaign[];
export type GetOrdersApiArg = {
  /** order status  */
  status?: string;
  /** brand id */
  brandId?: string;
  /** campaign id */
  campaignId?: string;
  /** key word for search */
  search?: string;
};
export type PostOrdersApiResponse = unknown;
export type PostOrdersApiArg = {
  body: {
    userId?: Uuid;
    campaignId?: Uuid;
    address?: AddressItemForOrders;
    motivation?: string;
  };
};
export type UpdateOrderApiResponse = /** status 204 No Content */ {};
export type UpdateOrderApiArg = {
  /** ID of order to update */
  orderId: Uuid;
  body: {
    status?: OrderStatus;
    logisticsInformation?: {
      providers?: string;
      number?: string;
      link?: string;
    };
    address?: AddressItem;
  };
};
export type DeleteOrdersByOrderIdApiResponse = unknown;
export type DeleteOrdersByOrderIdApiArg = {
  /** order id */
  orderId: string;
};
export type PatchMediasByMediaIdApiResponse = /** status 204 No Content */ {};
export type PatchMediasByMediaIdApiArg = {
  /** media id */
  mediaId: string;
  body: {
    status?: string;
    mediaType?:
      | "instagramMedia"
      | "instagramStory"
      | "instagramReel"
      | "youtube"
      | "blog"
      | "tiktok";
  };
};
export type GetCampaignsByCampaignIdReportingApiResponse =
  /** status 200 OK */ {
    campaignName?: string;
    brandName?: string;
    influencers?: ChartDataForStatisticsOfInfluencers;
    followers?: ChartDataForStatisticsFollowers;
    views?: ChartDataForStatisticsViews;
    engagements?: ChartDataForStatisticsEngagements;
    engagementRate?: ChartDataForStatisticsOfEngagementsRate;
    contents?: ChartDataForStatisticsOfContent;
    EMV?: number;
    totalRequests?: number;
    postAwaiting?: number;
    daysLeft?: number;
    contentsObj?: MediaContentItemForReporting[];
  };
export type GetCampaignsByCampaignIdReportingApiArg = {
  /** campaign id */
  campaignId: string;
};
export type GetUsersByUserIdApiResponse = /** status 200 OK */ UserItemForEdit;
export type GetUsersByUserIdApiArg = {
  /** user Id */
  userId: string;
};
export type GetUsersAdminByUserIdApiResponse =
  /** status 200 OK */ UserItemForAdminRole;
export type GetUsersAdminByUserIdApiArg = {
  /** user Id */
  userId: string;
};
export type PatchUsersByUserIdGeneralApiResponse =
  /** status 204 No Content */ {};
export type PatchUsersByUserIdGeneralApiArg = {
  /** user Id */
  userId: string;
  body: {
    general?: {
      avatarUrl?: string;
      status?: UserStatus;
      gender?: "male" | "female" | "other";
      firstName?: string;
      lastName?: string;
      email?: string;
      phoneNumber?: string;
      interests?: Uuid[];
      tags?: TagList;
      clubs?: ClubNameList;
      notes?: string;
      phoneActivated?: boolean;
      mailActivated?: boolean;
      birthdate?: string;
    };
  };
};
export type PatchUsersByUserIdNotificationsApiResponse =
  /** status 204 No Content */ {};
export type PatchUsersByUserIdNotificationsApiArg = {
  /** user Id */
  userId: string;
  body: {
    notifications?: NotificationListForUser;
  };
};
export type PatchUsersByUserIdSocialNetworkLinksApiResponse =
  /** status 204 No Content */ {};
export type PatchUsersByUserIdSocialNetworkLinksApiArg = {
  /** user Id */
  userId: string;
  body: {
    socialNetworkLinks?: SocialNetworkItem;
  };
};
export type PatchUsersByUserIdPasswordApiResponse =
  /** status 204 No Content */ {};
export type PatchUsersByUserIdPasswordApiArg = {
  /** user Id */
  userId: string;
  /** if backend need to send a mail for user */
  "send-to-user"?: boolean;
  body: {
    oldPassword?: string;
    newPassword: string;
  };
};
export type PatchUsersByUserIdStatusApiResponse =
  /** status 204 No Content */ {};
export type PatchUsersByUserIdStatusApiArg = {
  /** user Id */
  userId: string;
  body: {
    status?: UserStatus;
  };
};
export type PatchUsersByUserIdEmailApiResponse =
  /** status 204 No Content */ {};
export type PatchUsersByUserIdEmailApiArg = {
  /** user Id */
  userId: string;
  body: {
    email?: string;
  };
};
export type PatchUsersByUserIdPhoneNumberApiResponse =
  /** status 204 No Content */ {};
export type PatchUsersByUserIdPhoneNumberApiArg = {
  /** user Id */
  userId: string;
  body: {
    phoneNumber?: string;
  };
};
export type CreateNewAddressForOneUserApiResponse =
  /** status 201 Get addresses data */ AddressItemPost[];
export type CreateNewAddressForOneUserApiArg = {
  /** user Id */
  userId: string;
  /** A JSON Object containing order status information */
  addressItemPost: AddressItemPost;
};
export type UpdateOneUserAddressApiResponse =
  /** status 200 OK */ AddressItem[];
export type UpdateOneUserAddressApiArg = {
  /** user Id */
  userId: string;
  /** address Id */
  addressId: string;
  /** A JSON Object containing order status information */
  addressItem: AddressItem;
};
export type DeleteOneUserAddressApiResponse = /** status 204 No Content */ {};
export type DeleteOneUserAddressApiArg = {
  /** user Id */
  userId: string;
  /** address Id */
  addressId: string;
};
export type GetUserRatingsApiResponse = /** status 200 OK */ {
  ratingList?: {
    ""?: RatingStatistics;
  };
  ratingStatistics?: RatingStatistics;
};
export type GetUserRatingsApiArg = {
  /** user Id */
  userId: string;
};
export type CreateRatingApiResponse =
  /** status 201 Get rating statistic data */ RatingStatistics;
export type CreateRatingApiArg = {
  /** user Id */
  userId: string;
  /** A JSON Object containing a rating Item for a user on a campaign */
  body: {
    ratingStars?: number;
    comments?: string;
    brandId?: Uuid;
    campaignId?: Uuid;
  };
};
export type GetUsersByUserIdRatingsAndRatingIdApiResponse =
  /** status 200 OK */ RatingItem | /** status 201 Created */ undefined;
export type GetUsersByUserIdRatingsAndRatingIdApiArg = {
  /** user id */
  userId: string;
  /** rating id */
  ratingId: string;
};
export type PutUsersByUserIdRatingsAndRatingIdApiResponse =
  /** status 200 Get rating statistic data */ RatingStatistics;
export type PutUsersByUserIdRatingsAndRatingIdApiArg = {
  /** user id */
  userId: string;
  /** rating id */
  ratingId: string;
  ratingItem: RatingItem;
};
export type DeleteUsersByUserIdRatingsAndRatingIdApiResponse =
  /** status 200 Get rating statistic data */ RatingStatistics;
export type DeleteUsersByUserIdRatingsAndRatingIdApiArg = {
  /** user id */
  userId: string;
  /** rating id */
  ratingId: string;
};
export type GetBrandsApiResponse = /** status 200 OK */ BrandItemInBrandList2[];
export type GetBrandsApiArg = void;
export type CreateBrandsApiResponse = unknown;
export type CreateBrandsApiArg = {
  brandPostPatchItem: BrandPostPatchItem;
};
export type GetBrandsCreateCampaignApiResponse =
  /** status 200 OK */ BrandItemInBrandList[];
export type GetBrandsCreateCampaignApiArg = void;
export type GetOneBrandApiResponse =
  /** status 200 OK */ BrandItemWithAllOfDetails;
export type GetOneBrandApiArg = {
  /** ID of brand */
  brandId: string;
};
export type UpdateBrandApiResponse = /** status 204 No Content */ {};
export type UpdateBrandApiArg = {
  /** ID of campaign to update */
  brandId: string;
  brandPostPatchItem: BrandPostPatchItem;
};
export type PatchBrandsByBrandIdNotificationsApiResponse = unknown;
export type PatchBrandsByBrandIdNotificationsApiArg = {
  /** brand id */
  brandId: string;
  body: {
    notifications?: NotificationsForBrand;
  };
};
export type PatchBrandsByBrandIdSocialNetworkLinksApiResponse = unknown;
export type PatchBrandsByBrandIdSocialNetworkLinksApiArg = {
  /** brand id */
  brandId: string;
  body: {
    socialNetworkLinks?: SocialNetworkItem;
  };
};
export type UpdateOneBrandPasswordApiResponse = /** status 204 No Content */ {};
export type UpdateOneBrandPasswordApiArg = {
  /** ID of brand to update */
  brandId: Uuid;
  /** if need to send a mail for brand */
  "send-to-brand"?: boolean;
  /** A JSON Object containing a new password to update */
  body: {
    password?: string;
  };
};
export type GetClubsApiResponse = /** status 200 OK */ ClubItem[];
export type GetClubsApiArg = void;
export type PostClubsApiResponse = unknown;
export type PostClubsApiArg = {
  clubItemForPost: ClubItemForPost;
};
export type PatchClubsByClubIdApiResponse = unknown;
export type PatchClubsByClubIdApiArg = {
  /** Club id */
  clubId: string;
  clubItemForPost: ClubItemForPost;
};
export type GetClubsByClubIdApiResponse = /** status 200 OK */ ClubItem;
export type GetClubsByClubIdApiArg = {
  /** Club id */
  clubId: string;
};
export type DeleteClubsByClubIdApiResponse = unknown;
export type DeleteClubsByClubIdApiArg = {
  /** Club id */
  clubId: string;
};
export type GetClubsByClubIdStatisticsApiResponse = /** status 200 OK */ {
  nbInfluencers?: ChartDataForStatisticsOfInfluencers;
  nbFollowers?: ChartDataForStatisticsFollowers;
  nbViews?: ChartDataForStatisticsViews;
  averageEngagements?: ChartDataForStatisticsEngagements;
};
export type GetClubsByClubIdStatisticsApiArg = {
  /** Club id */
  clubId: string;
};
export type GetClubsByClubIdUsersApiResponse =
  /** status 200 OK */ UserItemForUserList[];
export type GetClubsByClubIdUsersApiArg = {
  /** Club id */
  clubId: string;
};
export type PatchClubsByClubIdUsersApiResponse = unknown;
export type PatchClubsByClubIdUsersApiArg = {
  /** Club id */
  clubId: string;
  body: {
    methods?: "add" | "remove";
    ids?: Uuid[];
  };
};
export type GetChatUserByUserIdContactsApiResponse =
  /** status 200 OK */ UserItemDetailForChat[];
export type GetChatUserByUserIdContactsApiArg = {
  /** User id */
  userId: string;
  /** Filter by Keyword */
  search?: string;
};
export type GetChatUserByUserIdConversationsApiResponse =
  /** status 200 OK */ ChatConversationItem[];
export type GetChatUserByUserIdConversationsApiArg = {
  /** User id */
  userId: string;
};
export type PostChatUserByUserIdConversationsApiResponse = unknown;
export type PostChatUserByUserIdConversationsApiArg = {
  /** User id */
  userId: string;
  /** conversation id and message */
  body: {
    participants?: UserItemForChat[];
    message?: MessageToSendItemForChat;
    campaignId?: Uuid;
  };
};
export type GetChatUserByUserIdConversationsAndConversationIdMessagesApiResponse =
  /** status 200 OK */ ChatConversationItem;
export type GetChatUserByUserIdConversationsAndConversationIdMessagesApiArg = {
  /** Conversation id */
  conversationId: string;
  /** User id */
  userId: string;
};
export type PostChatUserByUserIdConversationsAndConversationIdMessagesApiResponse =
  /** status 201 Created */ {
    conversationId?: Uuid;
    messageId?: Uuid;
    message?: string;
    contenType?: "text" | "video" | "image";
    attachement?: string[];
    createdAt?: Date;
    senderId?: Uuid;
  };
export type PostChatUserByUserIdConversationsAndConversationIdMessagesApiArg = {
  /** Conversation id */
  conversationId: string;
  /** User id */
  userId: string;
  messageToSendItemForChat: MessageToSendItemForChat;
};
export type PostChatUserByUserIdConversationsAndConversationIdMarkAsReadApiResponse =
  unknown;
export type PostChatUserByUserIdConversationsAndConversationIdMarkAsReadApiArg =
  {
    /** User id */
    userId: string;
    /** conversation id  */
    conversationId: string;
  };
export type GetInterestsApiResponse = /** status 200 OK */ {
  id?: Uuid;
  name?: string;
}[];
export type GetInterestsApiArg = void;
export type GetNotificationsApiResponse = /** status 200 OK */ {
  id?: Uuid;
  title?: string;
  description?: string;
  avatar?: string;
  type?: string;
  createdAt?: string;
  readAt?: string;
}[];
export type GetNotificationsApiArg = void;
export type PutNotificationsReadApiResponse = unknown;
export type PutNotificationsReadApiArg = {
  body: {
    notificationIds?: string[];
  };
};
export type GetIndustriesApiResponse = /** status 200 OK */ {
  id?: Uuid;
  name?: string;
}[];
export type GetIndustriesApiArg = void;
export type GetIndustriesTestApiResponse = /** status 200 OK */ {
  id?: Uuid;
  name?: string;
}[];
export type GetIndustriesTestApiArg = void;
export type GetTagsApiResponse = /** status 200 OK */ TagList;
export type GetTagsApiArg = void;
export type GetClubsClubnamesApiResponse = /** status 200 OK */ ClubNameList;
export type GetClubsClubnamesApiArg = void;
export type PostUsersRegistrationApiResponse = /** status 201 Created */ {
  user?: {
    id?: string;
    status?: string;
  };
  token?: string;
  refreshToken?: string;
};
export type PostUsersRegistrationApiArg = {
  body: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  };
};
export type PostUsersRegistrationByUserIdResendEmailCodeApiResponse = unknown;
export type PostUsersRegistrationByUserIdResendEmailCodeApiArg = {
  /** user id */
  userId: string;
};
export type PostUsersRegistrationByUserIdCheckEmailApiResponse = unknown;
export type PostUsersRegistrationByUserIdCheckEmailApiArg = {
  /** user id */
  userId: string;
  body: {
    code?: string;
  };
};
export type PostUsersRegistrationByUserIdGeneralApiResponse = unknown;
export type PostUsersRegistrationByUserIdGeneralApiArg = {
  /** user id */
  userId: string;
  userItemForPostRegistrationGeneral: UserItemForSignup;
};
export type PostUsersRegistrationByUserIdResendPhoneCodeApiResponse = unknown;
export type PostUsersRegistrationByUserIdResendPhoneCodeApiArg = {
  /** user id */
  userId: string;
};
export type PostUsersRegistrationByUserIdCheckPhoneNumberApiResponse = unknown;
export type PostUsersRegistrationByUserIdCheckPhoneNumberApiArg = {
  /** user id */
  userId: string;
  body: {
    code?: string;
  };
};
export type GetUserCampaignsApiResponse =
  /** status 200 OK */ CampaignItemForListOfCampaignsInUserUi[];
export type GetUserCampaignsApiArg = void;
export type GetUserCampaignsByCampaignIdApiResponse =
  /** status 200 OK */ CampaignItemForSingleCampaignInUserUi;
export type GetUserCampaignsByCampaignIdApiArg = {
  /** campaign id */
  campaignId: string;
};
export type GetUsersByUserIdOrdersApiResponse =
  /** status 200 OK */ OrderItemForOrderListInUserUi[];
export type GetUsersByUserIdOrdersApiArg = {
  /** user id */
  userId: string;
};
export type GetChatUsersByUserIdOrdersApiResponse =
  /** status 200 OK */ OrderItemForChatInUserUi[];
export type GetChatUsersByUserIdOrdersApiArg = {
  /** user id */
  userId: string;
};
export type GetUsersByUserIdMediasStatisticsApiResponse = /** status 200 OK */ {
  globalAccountInformation?: {
    contents?: number;
    impressions?: number;
    views?: number;
    clicks?: number;
  };
  instagram?: InstagramStatisticForUserSocialNetworkMedia;
  youtube?: YoutubeStatisticForUserSocialNetworkMedia;
  tiktok?: TiktokStatisticForUserSocialNetworkMedia;
  blog?: BlogStatistics;
};
export type GetUsersByUserIdMediasStatisticsApiArg = {
  /** user id */
  userId: string;
};
export type GetUsersByUserIdIgMediasApiResponse =
  /** status 200 OK */ MediaContentItemForFeed[];
export type GetUsersByUserIdIgMediasApiArg = {
  /** User id */
  userId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: number;
};
export type GetUsersByUserIdIgStoriesApiResponse =
  /** status 200 OK */ MediaContentItemForFeed[];
export type GetUsersByUserIdIgStoriesApiArg = {
  /** user id */
  userId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type GetUsersByUserIdIgReelsApiResponse =
  /** status 200 OK */ MediaContentItemForFeed[];
export type GetUsersByUserIdIgReelsApiArg = {
  /** user id */
  userId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type DeleteOrdersByOrderIdMediasAndMediaIdApiResponse = unknown;
export type DeleteOrdersByOrderIdMediasAndMediaIdApiArg = {
  /** order id */
  orderId: string;
  /** media id */
  mediaId: string;
};
export type GetUsersByUserIdOrdersAndOrderIdIgMediasApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdOrdersAndOrderIdIgMediasApiArg = {
  /** user Id */
  userId: string;
  /** order Id */
  orderId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type PostUsersByUserIdOrdersAndOrderIdIgMediasApiResponse = unknown;
export type PostUsersByUserIdOrdersAndOrderIdIgMediasApiArg = {
  /** user Id */
  userId: string;
  /** order Id */
  orderId: string;
  body: {
    newMedia?: UploadContentItem;
  };
};
export type PatchUsersByUserIdOrdersAndOrderIdIgMediasApiResponse = unknown;
export type PatchUsersByUserIdOrdersAndOrderIdIgMediasApiArg = {
  /** user Id */
  userId: string;
  /** order Id */
  orderId: string;
  /** array of medias ids selected */
  body: string[];
};
export type GetUsersByUserIdOrdersAndOrderIdIgStoriesApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdOrdersAndOrderIdIgStoriesApiArg = {
  /** user Id */
  userId: string;
  /** order Id */
  orderId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type PostUsersByUserIdOrdersAndOrderIdIgStoriesApiResponse = unknown;
export type PostUsersByUserIdOrdersAndOrderIdIgStoriesApiArg = {
  /** user Id */
  userId: string;
  /** order Id */
  orderId: string;
  body: {
    newMedia?: UploadContentItem;
  };
};
export type PatchUsersByUserIdOrdersAndOrderIdIgStoriesApiResponse = unknown;
export type PatchUsersByUserIdOrdersAndOrderIdIgStoriesApiArg = {
  /** user Id */
  userId: string;
  /** order Id */
  orderId: string;
  /** array of stories ids selected */
  body: string[];
};
export type GetUsersByUserIdOrdersAndOrderIdIgReelsApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdOrdersAndOrderIdIgReelsApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type PostUsersByUserIdOrdersAndOrderIdIgReelsApiResponse = unknown;
export type PostUsersByUserIdOrdersAndOrderIdIgReelsApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  body: {
    newMedia?: UploadContentItem;
  };
};
export type PatchUsersByUserIdOrdersAndOrderIdIgReelsApiResponse = unknown;
export type PatchUsersByUserIdOrdersAndOrderIdIgReelsApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  /** array of reels ids selected */
  body: string[];
};
export type GetUsersByUserIdYoutubeApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdYoutubeApiArg = {
  /** user id */
  userId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type GetUsersByUserIdOrdersAndOrderIdYoutubeApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdOrdersAndOrderIdYoutubeApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type PostUsersByUserIdOrdersAndOrderIdYoutubeApiResponse = unknown;
export type PostUsersByUserIdOrdersAndOrderIdYoutubeApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  body: string[];
};
export type GetUsersByUserIdYoutubeShortsApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdYoutubeShortsApiArg = {
  /** user id */
  userId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type GetUsersByUserIdOrdersAndOrderIdYoutubeShortsApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdOrdersAndOrderIdYoutubeShortsApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type PostUsersByUserIdOrdersAndOrderIdYoutubeShortsApiResponse = unknown;
export type PostUsersByUserIdOrdersAndOrderIdYoutubeShortsApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  body: {
    newMedia?: UploadContentItem;
  };
};
export type GetUsersByUserIdOrdersAndOrderIdTiktokApiResponse =
  /** status 200 OK */ MediaContentItemForOrder[];
export type GetUsersByUserIdOrdersAndOrderIdTiktokApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  /** default is 1, user click "load more" button, pagination will increment and get more contents */
  pagination?: string;
};
export type PostUsersByUserIdOrdersAndOrderIdTiktokApiResponse = unknown;
export type PostUsersByUserIdOrdersAndOrderIdTiktokApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  body: {
    newMedia?: UploadContentItem;
  };
};
export type GetUsersByUserIdOrdersAndOrderIdBlogApiResponse =
  /** status 200 OK */ {
    blogLink?: string;
  };
export type GetUsersByUserIdOrdersAndOrderIdBlogApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
};
export type PostUsersByUserIdOrdersAndOrderIdBlogApiResponse = unknown;
export type PostUsersByUserIdOrdersAndOrderIdBlogApiArg = {
  /** user id */
  userId: string;
  /** order id */
  orderId: string;
  body: {
    blogLink?: string;
  };
};
export type PostUploadApiResponse =
  /** status 201 Upload successful */ string[];
export type PostUploadApiArg = {
  body: {
    destination?: string;
    file?: Blob[];
  };
};
export type PostRefreshTokenApiResponse = /** status 200 OK */ {
  token?: string;
  refreshToken?: string;
};
export type PostRefreshTokenApiArg = {
  body: {
    id?: Uuid;
    refreshToken?: string;
  };
};
export type PostUsersResetPasswordApiResponse = unknown;
export type PostUsersResetPasswordApiArg = {
  body: {
    newPassword?: string;
    token?: string;
  };
};
export type Uuid = string;
export type UserSocialNetworkFollowersAndUrl = {
  instagram?: {
    url?: string;
    followers?: number;
  };
  youtube?: {
    url?: string;
    followers?: number;
  };
  tiktok?: {
    url?: string;
    followers?: number;
  };
  blog?: {
    url?: string;
    visites?: number;
  };
};
export type UserStatus =
  | "registered"
  | "incomplete"
  | "refused"
  | "active"
  | "suspended";
export type UserItemForUserList = {
  id?: Uuid;
  fullName?: string;
  avatarUrl?: string;
  nbMessageUnread?: number;
  socialNetworks?: UserSocialNetworkFollowersAndUrl;
  createdAt?: string;
  ratingStars?: number;
  status?: UserStatus;
};
export type TagList = string[];
export type ClubNameList = string[];
export type ChartDataForStatistics = {
  title?: string;
  percent?: number;
  total?: number;
  chartData?: number[];
};
export type CampaignStatus = "draft" | "scheduled" | "running" | "finished";
export type CampaignItemForListOfCampaigns = {
  id?: Uuid;
  name?: string;
  featuredImage?: string;
  socialNetworks?: string[];
  request?: number;
  stock?: number;
  messages?: number;
  startDate?: string;
  endDate?: string;
  status?: CampaignStatus;
  brand?: {
    id?: Uuid;
    name?: string;
  };
  EMV?: number;
};
export type ArrayOfImagePaths = string[];
export type ArrayOfStrings = string[];
export type CampaignItemForCreateOrUpdateCampaign = {
  name?: string;
  campaignDescription?: string;
  campaignDetails?: string;
  requirements?: string;
  descriptionImages?: ArrayOfImagePaths;
  inspirationImages?: ArrayOfImagePaths;
  bannerImage?: string | null;
  featuredImage?: string;
  socialNetworks?: {
    name?: string;
    details?: string;
  }[];
  stock?: number;
  price?: number;
  teaser?: boolean;
  startDate?: string;
  endDate?: string;
  hastags?: ArrayOfStrings;
  mentions?: ArrayOfStrings;
  campaignLink?: string;
  youtubeLink?: string;
  CTAText?: string;
  options?: {
    name?: string;
    content?: ArrayOfStrings;
  }[];
  brandId?: Uuid;
  status?: CampaignStatus;
};
export type ChartDataForStatisticsOfInfluencers = {
  chartData?: number[];
  labels?: string[];
};
export type ChartDataForStatisticsFollowers = {
  total?: number;
  instagram?: number;
  youtube?: number;
  tiktok?: number;
};
export type ChartDataForStatisticsViews = {
  total?: number;
  instagramMedia?: number;
  youtube?: number;
  tiktok?: number;
  instagramStory?: number;
};
export type ChartDataForStatisticsEngagements = {
  total?: number;
  instagram?: number;
  youtube?: number;
  tiktok?: number;
};
export type OrderStatus =
  | "pending"
  | "rejected"
  | "readyToShip"
  | "shipped"
  | "received"
  | "published"
  | "validated";
export type TargetingBody = {
  gender?: ("male" | "female" | "other")[];
  engagementRate?: number;
  ages?: string[];
  interests?: Uuid[];
  ratingStars?: number;
  instagramMinFollowers?: number;
  instagramMaxFollowers?: number;
  youtubeMinFollowers?: number;
  youtubeMaxFollowers?: number;
  tikTokMinFollowers?: number;
  tikTokMaxFollowers?: number;
  blogMinFollowers?: number;
  blogMaxFollowers?: number;
  campaignsExcluded?: {
    campaignId?: Uuid;
    ordersStatus?: OrderStatus;
  }[];
  campaignsIncluded?: {
    campaignId?: Uuid;
    ordersStatus?: OrderStatus;
  }[];
  clubsExcluded?: string[];
  clubsIncluded?: string[];
  countriesExcluded?: string[];
  countriesIncluded?: string[];
  regionsIncluded?: string[];
  regionsExcluded?: string[];
  citiesExcluded?: {
    label?: string;
    radiusAround?: number;
  }[];
  citiesIncluded?: {
    label?: string;
    radiusAround?: number;
  }[];
  usersExcluded?: Uuid[];
  usersIncluded?: Uuid[];
  status?: CampaignStatus;
};
export type Date = string;
export type MediaTypeForOrder =
  | "instagramPost"
  | "instagramCarousel"
  | "instagramVideo"
  | "instagramStory"
  | "instagramReel"
  | "youtubeVideo"
  | "youtubeShorts"
  | "tiktok"
  | "blog";
export type MetricsSchema = {
  [key: string]: number;
};
export type MediaAttributesSchema = {
  postsAsPersonalAccount?: boolean;
  title?: string;
  mentions?: string[];
  thumbnailUrl?: string[];
};
export type MediaContentItemForOrder = {
  id?: Uuid;
  mediaType?: MediaTypeForOrder;
  metrics?: MetricsSchema;
  publishDate?: string;
  status?: "published" | "validated";
  link?: string;
  nativeMediaId?: string;
  mediaPath?: string[];
  attributes?: MediaAttributesSchema;
};
export type AudienceCountrySchema = {
  [key: string]: number;
};
export type AudienceCitySchema = {
  [key: string]: number;
};
export type InstagramStatisticForUserSocialNetworkMedia = {
  engagementRate?: number;
  followers?: number;
  following?: number;
  reach30Day?: number;
  impressions30Day?: number;
  posts?: number;
  averagePostImpressions?: number;
  postImpressionRate?: number;
  averagePostReach?: number;
  postReachRate?: number;
  averagePostComments?: number;
  postsPerMonth?: number;
  averagePostLikes?: number;
  averageCarouselLikes?: number;
  averageStoryViews?: number;
  storyViewRate?: number;
  averageStoryComments?: number;
  averageStoryClicks?: number;
  averageStoryLikes?: number;
  averageReelViews?: number;
  reelViewRate?: number;
  averageReelReach?: number;
  averageReelComments?: number;
  reelReachRate?: number;
  averageReelLikes?: number;
  audienceCountry?: AudienceCountrySchema;
  audienceCity?: AudienceCitySchema;
  lastPost?: string;
  audienceDemographic?: {
    "F.13-17"?: number;
    "F.18-24"?: number;
    "F.25-34"?: number;
    "F.35-44"?: number;
    "F.45-54"?: number;
    "F.55-64"?: number;
    "F.65+"?: number;
    "M.13-17"?: number;
    "M.18-24"?: number;
    "M.25-34"?: number;
    "M.35-44"?: number;
    "M.45-54"?: number;
    "M.55-64"?: number;
    "M.65+"?: number;
    "U.13-17"?: number;
    "U.18-24"?: number;
    "U.25-34"?: number;
    "U.35-44"?: number;
    "U.45-54"?: number;
    "U.55-64"?: number;
    "U.65+"?: number;
  };
};
export type YoutubeStatisticForUserSocialNetworkMedia = {
  engagementRate?: number;
  averageLikes?: number;
  averageUnlikes?: number;
  averageYoutubeViews?: number;
  averageYoutubeShortsViews?: number;
  viewRate?: number;
  averageImpressions?: number;
  impressingRate?: number;
  followers?: number;
  following?: number;
  views?: number;
  videos?: number;
  reach30Day?: number;
  impressions30Day?: number;
  averageComments?: number;
  audienceCountry?: AudienceCountrySchema;
  audienceCity?: AudienceCitySchema;
  audienceDemographic?: {
    "F.13-17"?: number;
    "F.18-24"?: number;
    "F.25-34"?: number;
    "F.35-44"?: number;
    "F.45-54"?: number;
    "F.55-64"?: number;
    "F.65+"?: number;
    "M.13-17"?: number;
    "M.18-24"?: number;
    "M.25-34"?: number;
    "M.35-44"?: number;
    "M.45-54"?: number;
    "M.55-64"?: number;
    "M.65+"?: number;
    "U.13-17"?: number;
    "U.18-24"?: number;
    "U.25-34"?: number;
    "U.35-44"?: number;
    "U.45-54"?: number;
    "U.55-64"?: number;
    "U.65+"?: number;
  };
  lastPost?: string;
};
export type TiktokStatisticForUserSocialNetworkMedia = {
  engagementRate?: number;
  totalLikes?: number;
  averageViews?: number;
  viewRate?: number;
  averageReach?: number;
  averageLikes?: number;
  reachRate?: number;
  averageComments?: number;
  followers?: number;
  following?: number;
  reach30Day?: number;
  impressions30Day?: number;
  posts?: number;
  views?: number;
  postsPerMonth?: number;
  audienceCountry?: AudienceCountrySchema;
  audienceCity?: AudienceCitySchema;
  audienceDemographic?: {
    "F.13-17"?: number;
    "F.18-24"?: number;
    "F.25-34"?: number;
    "F.35-44"?: number;
    "F.45-54"?: number;
    "F.55-64"?: number;
    "F.65+"?: number;
    "M.13-17"?: number;
    "M.18-24"?: number;
    "M.25-34"?: number;
    "M.35-44"?: number;
    "M.45-54"?: number;
    "M.55-64"?: number;
    "M.65+"?: number;
    "U.13-17"?: number;
    "U.18-24"?: number;
    "U.25-34"?: number;
    "U.35-44"?: number;
    "U.45-54"?: number;
    "U.55-64"?: number;
    "U.65+"?: number;
  };
  lastPost?: string;
};
export type BlogStatistics = {
  link?: string;
  monthlyVisitors?: number;
};
export type UserSocialNetworkStatisticsByMedia = {
  instagram?: InstagramStatisticForUserSocialNetworkMedia;
  youtube?: YoutubeStatisticForUserSocialNetworkMedia;
  tiktok?: TiktokStatisticForUserSocialNetworkMedia;
  blog?: BlogStatistics;
};
export type UserItemForManageCampaignPage = {
  id?: Uuid;
  fullName?: string;
  avatarUrl?: string;
  gender?: "male" | "female" | "other";
  age?: number;
  city?: string;
  rating?: {
    ratingStars?: number;
    totalComments?: number;
  };
  biography?: string;
  socialNetworkLinks?: {
    name?: string;
    link?: string;
  }[];
  motivation?: string;
  historyStatistic?: {
    pending?: number;
    readyToShip?: number;
    rejected?: number;
    shipped?: number;
    received?: number;
    published?: number;
    validated?: number;
    declined?: number;
  };
  orderList?: {
    id?: Uuid;
    status?: OrderStatus;
    updatedAt?: Date;
    campaignName?: string;
    brandName?: string;
  }[];
  publicationsHistory?: MediaContentItemForOrder[];
  socialNetworksStatisticsByMedia?: UserSocialNetworkStatisticsByMedia;
};
export type UserItemForOrderList = {
  id?: Uuid;
  fullName?: string;
  avatarUrl?: string;
  ratingStars?: number;
  socialNetworkStatistics?: {
    instagram?: {
      followers?: number;
      engagementRate?: number;
      likes?: number;
    };
    youtube?: {
      followers?: number;
      engagementRate?: number;
      views?: number;
    };
    blog?: boolean;
  };
};
export type BrandStatus = "active" | "on hold" | "deactivated";
export type BrandItemInBrandList = {
  id?: Uuid;
  name?: string;
  logoPath?: string;
  group?: string;
  status?: BrandStatus;
};
export type CampaignItemForOrderList = {
  id?: string;
  name?: string;
  request?: number;
  stock?: number;
  brand?: BrandItemInBrandList;
};
export type AddressItemForOrders = {
  title?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  supplement?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
export type OrderItemForManageCampaign = {
  id: Uuid;
  status: OrderStatus;
  user: UserItemForOrderList;
  campaign: CampaignItemForOrderList;
  address: AddressItemForOrders;
  motivation: string;
  logisticsInformation?: {
    number: string;
    providers: string;
    createdAt: Date;
    updatedAt?: Date;
    link?: string;
  };
  contents?: MediaContentItemForOrder[];
  nbMessageUnread?: number;
  createdAt: Date;
  updatedAt?: Date;
};
export type AddressItem = {
  id?: Uuid;
  title?: string;
  default?: boolean;
  userId?: Uuid;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  supplement?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
export type ChartDataForStatisticsOfEngagementsRate = {
  global?: number;
  instagram?: {
    campaign?: number;
    general?: number;
  };
  youtube?: {
    campaign?: number;
    general?: number;
  };
  tiktok?: {
    campaign?: number;
    general?: number;
  };
};
export type ChartDataForStatisticsOfContent = {
  total?: number;
  instagramMedia?: number;
  instagramStory?: number;
  instagramReel?: number;
  youtube?: number;
  tiktok?: number;
  blog?: number;
};
export type MediaContentItemForReporting = {
  id?: Uuid;
  mediaType?: MediaTypeForOrder;
  mediaPath?: string;
  publishDate?: string;
  metrics?: MetricsSchema;
  EMV?: number;
  status?: "published" | "validated";
  user?: {
    id?: Uuid;
    avatarUrl?: string;
    fullName?: string;
  };
};
export type SocialNetworkItem = {
  name?: "instagram" | "tiktok" | "youtube" | "website";
  tokenStatus?: boolean;
  tokenExpiry?: number;
  link?: string;
};
export type NotificationListForUser = {
  userId?: Uuid;
  EmailMeWhenIGetAMessageFromTribz?: boolean;
  EmailMeWhenTheStatusOfMyOrderChanges?: boolean;
  NewsAndAnnouncements?: boolean;
  WeeklyProductUpdates?: boolean;
  WeeklyBlogDigest?: boolean;
};
export type UserItemForEdit = {
  id?: Uuid;
  avatarUrl?: string;
  status?: UserStatus;
  mailActivated?: boolean;
  phoneActivated?: boolean;
  credits?: number;
  usedCredits?: number;
  gender?: "male" | "female" | "other";
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  birthdate?: string;
  interests?: Uuid[];
  addresses?: AddressItem[];
  socialNetworkLinks?: SocialNetworkItem[];
  notifications?: NotificationListForUser;
  socialNetworksStatisticsByMedia?: UserSocialNetworkStatisticsByMedia;
  role?: "admin" | "influencer";
};
export type RatingItem = {
  id?: Uuid;
  comments?: string;
  ratingStars?: number;
  userId?: Uuid;
  campaign?: {
    id?: Uuid;
    name?: string;
  };
  brand?: {
    id?: Uuid;
    name?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
};
export type RatingStatistics = {
  averageStars?: number;
  totalComments?: number;
  totalByStars?: {
    "0"?: {
      totalComments?: number;
      rate?: number;
    };
    "1"?: {
      totalComments?: number;
      rate?: number;
    };
    "2"?: {
      totalComments?: number;
      rate?: number;
    };
    "3"?: {
      totalComments?: number;
      rate?: number;
    };
    "4"?: {
      totalComments?: number;
      rate?: number;
    };
    "5"?: {
      totalComments?: number;
      rate?: number;
    };
  };
};
export type UserItemForAdminRole = {
  id?: Uuid;
  avatarUrl?: string;
  status?: UserStatus;
  mailActivated?: boolean;
  phoneActivated?: boolean;
  credits?: number;
  usedCredits?: number;
  gender?: "male" | "female" | "other";
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  birthdate?: string;
  interests?: Uuid[];
  tags?: TagList;
  clubs?: ClubNameList;
  notes?: string;
  addresses?: AddressItem[];
  socialNetworkLinks?: SocialNetworkItem;
  notifications?: NotificationListForUser;
  ratings?: {
    ratingList?: RatingItem[];
    ratingStatistics?: RatingStatistics;
  };
  socialNetworksStatisticsByMedia?: UserSocialNetworkStatisticsByMedia;
  role?: "admin" | "influencer";
};
export type AddressItemPost = {
  title: string;
  default: boolean;
  address: string;
  country: string;
  city: string;
  supplement?: string;
  zipCode: string;
  firstName?: string;
  lastName?: string;
};
export type BrandItemInBrandList2 = {
  id?: string;
  name?: string;
  logoPath?: string;
  group?: string;
  activeCampaigns?: number;
  totalCampaigns?: number;
  totalContents?: number;
  status?: BrandStatus;
};
export type BrandPostPatchItem = {
  logoPath?: string;
  status?: BrandStatus;
  mailActivated?: boolean;
  brandName?: string;
  group?: string;
  gender?: "male" | "female" | "other";
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  addresses?: {
    address?: string;
    country?: string;
    city?: string;
    zipCode?: string;
    supplement?: string;
  };
  industry?: Uuid[];
  notes?: string;
};
export type NotificationsForBrand = {
  EmailMeWhenMyCampaignStatusChanges?: boolean;
  EmailMeWhenIGetAChatMessage?: boolean;
  NewsAndAnnouncements?: boolean;
  WeeklyProductUpdates?: boolean;
};
export type BrandItemWithAllOfDetails = {
  id?: Uuid;
  logoPath?: string;
  status?: BrandStatus;
  mailActivated?: boolean;
  brandName?: string;
  group?: string;
  gender?: "male" | "female" | "other";
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  addresses?: {
    address?: string;
    country?: string;
    city?: string;
    zipCode?: string;
    supplement?: string;
  };
  industry?: Uuid[];
  notes?: string;
  notifications?: NotificationsForBrand;
  socialNetworkLinks?: SocialNetworkItem;
};
export type ClubItem = {
  id?: Uuid;
  name?: string;
  description?: string;
  url?: string;
  status?: "active" | "pending";
  logoPath?: string;
  bannerPath?: string;
  clubTag?: string;
  landingPage?: boolean;
  nbInfluencers?: number;
};
export type ClubItemForPost = {
  id?: Uuid;
  name?: string;
  description?: string;
  url?: string;
  status?: "active" | "pending";
  logoPath?: string;
  bannerPath?: string;
  clubTag?: string;
  landingPage?: boolean;
};
export type ChatStatus = "online" | "invisible" | "away";
export type UserItemDetailForChat = {
  id?: Uuid;
  fullName?: string;
  userName?: string;
  avatarUrl?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  lastActivity?: Date;
  status?: ChatStatus;
  position?: string;
  brand?: string;
  campaign?: string;
};
export type UserItemForChat = {
  id?: Uuid;
  fullName?: string;
  userName?: string;
  avatarUrl?: string;
};
export type MessageItemForChat = {
  id?: string;
  body?: string;
  contentType?: "text" | "image" | "video";
  attachments?: string[];
  createdAt?: Date;
  senderId?: string;
};
export type ChatConversationItem = {
  id?: Uuid;
  participants?: (UserItemForChat | UserItemDetailForChat)[];
  messages?: MessageItemForChat[];
  unreadCount?: number;
  campaignId?: string;
  brandId?: string;
  orderId?: string;
  attachements?: string[];
};
export type MessageToSendItemForChat = {
  body?: string;
  contentType?: "text" | "image" | "video";
  attachments?: string[];
  senderId?: string;
};
export type AddressItemPostForUserSignup = {
  address?: string;
  country?: string;
  city?: string;
  supplement?: string;
  zipCode?: string;
  title?: string;
};
export type UserItemForSignup = {
  id?: Uuid;
  gender?: "male" | "female" | "other";
  firstName?: string;
  lastName?: string;
  email?: string;
  birthdate?: string;
  phoneNumber?: string;
  address?: AddressItemPostForUserSignup;
  interests?: string[];
  agreePrivacyPolicy?: boolean;
};
export type CampaignItemForListOfCampaignsInUserUi = {
  id?: Uuid;
  name?: string;
  featuredImage?: string;
  descriptionImages?: ArrayOfImagePaths;
  socialNetworks?: string[];
  teaser?: boolean;
  price?: number;
  startDate?: string;
  endDate?: string;
  CTAText?: string;
  brand?: {
    name?: string;
    logoPath?: string;
  };
  interests?: Uuid[];
};
export type CampaignItemForSingleCampaignInUserUi = {
  id?: Uuid;
  name?: string;
  campaignDescription?: string;
  campaignDetails?: string;
  requirements?: string;
  descriptionImages?: ArrayOfImagePaths;
  inspirationImages?: ArrayOfImagePaths;
  bannerImage?: string | null;
  featuredImage?: string;
  socialNetworks?: {
    name?: string;
    details?: string;
  }[];
  stock?: number;
  price?: number;
  teaser?: boolean;
  startDate?: string;
  endDate?: string;
  hastags?: ArrayOfStrings;
  mentions?: ArrayOfStrings;
  campaignLink?: string;
  youtubeLink?: string;
  CTAText?: string;
  options?: {
    name?: string;
    content?: ArrayOfStrings;
  }[];
  brand?: {
    name?: string;
    logoPath?: string;
    id?: Uuid;
  };
  status?: CampaignStatus;
};
export type OrderItemForOrderListInUserUi = {
  id: Uuid;
  status: OrderStatus;
  unreadCount?: number;
  campaign: {
    id?: Uuid;
    name?: string;
    featuredImage?: string;
    brand?: {
      name?: string;
      logoPath?: string;
    };
    mentions?: string[];
    hashtags?: string[];
    campaignLink?: string;
    socialNetworks?: {
      name?: string;
      detail?: string;
    }[];
  };
  address: AddressItemPost;
  logisticsInformation?: {
    number: string;
    providers: string;
    createdAt: Date;
    updatedAt?: Date;
    link?: string;
  };
  contents?: MediaContentItemForOrder[];
  createdAt: Date;
  updatedAt: Date;
};
export type OrderItemForChatInUserUi = {
  id: Uuid;
  status: OrderStatus;
  campaign: {
    id?: Uuid;
    name?: string;
    featuredImage?: string;
  };
  createdAt: Date;
  updatedAt: Date;
};
export type MediaContentItemForFeed = {
  nativeMediaId?: string;
  mediaType?: MediaTypeForOrder;
  mediaPath?: string[];
  metrics?: MetricsSchema;
  attributes?: MediaAttributesSchema;
  publishDate?: string;
  link?: string;
};
export type UploadContentItem = {
  file?: Blob;
  views?: number;
  reach?: number;
  likes?: number;
  comments?: number;
};
export const {
  useLoginMutation,
  useFacebookLoginMutation,
  useGoogleLoginMutation,
  useLogoutMutation,
  usePostUsersForgotPasswordMutation,
  useGetUsersQuery,
  usePostUsersMutation,
  usePatchUsersMutation,
  useGetUsersToValidateQuery,
  useGetGeneralStatisticsQuery,
  useGetUserStatisticsQuery,
  useGetStatisticsPlatformUsersDashboardQuery,
  useGetSocialNetworksStatisticsQuery,
  useGetCampaignsQuery,
  useCreateCampaignMutation,
  useUpdateOneCampaignMutation,
  useDeleteCampaignsByCampaignIdMutation,
  useGetStatisticsSocialNetworksFilterByTargetingQuery,
  usePostStatisticsSocialNetworksFilterByTargetingMutation,
  useGetIncludedUsersListByFilterQuery,
  useGetCampaignsByCampaignIdTargetingQuery,
  usePostCampaignsByCampaignIdTargetingMutation,
  useUpdateFilterInformationForTargetingMutation,
  useGetUsersByUserIdOrdersStatisticsAndOrderIdQuery,
  useGetOrdersQuery,
  usePostOrdersMutation,
  useUpdateOrderMutation,
  useDeleteOrdersByOrderIdMutation,
  usePatchMediasByMediaIdMutation,
  useGetCampaignsByCampaignIdReportingQuery,
  useGetUsersByUserIdQuery,
  useGetUsersAdminByUserIdQuery,
  usePatchUsersByUserIdGeneralMutation,
  usePatchUsersByUserIdNotificationsMutation,
  usePatchUsersByUserIdSocialNetworkLinksMutation,
  usePatchUsersByUserIdPasswordMutation,
  usePatchUsersByUserIdStatusMutation,
  usePatchUsersByUserIdEmailMutation,
  usePatchUsersByUserIdPhoneNumberMutation,
  useCreateNewAddressForOneUserMutation,
  useUpdateOneUserAddressMutation,
  useDeleteOneUserAddressMutation,
  useGetUserRatingsQuery,
  useCreateRatingMutation,
  useGetUsersByUserIdRatingsAndRatingIdQuery,
  usePutUsersByUserIdRatingsAndRatingIdMutation,
  useDeleteUsersByUserIdRatingsAndRatingIdMutation,
  useGetBrandsQuery,
  useCreateBrandsMutation,
  useGetBrandsCreateCampaignQuery,
  useGetOneBrandQuery,
  useUpdateBrandMutation,
  usePatchBrandsByBrandIdNotificationsMutation,
  usePatchBrandsByBrandIdSocialNetworkLinksMutation,
  useUpdateOneBrandPasswordMutation,
  useGetClubsQuery,
  usePostClubsMutation,
  usePatchClubsByClubIdMutation,
  useGetClubsByClubIdQuery,
  useDeleteClubsByClubIdMutation,
  useGetClubsByClubIdStatisticsQuery,
  useGetClubsByClubIdUsersQuery,
  usePatchClubsByClubIdUsersMutation,
  useGetChatUserByUserIdContactsQuery,
  useGetChatUserByUserIdConversationsQuery,
  usePostChatUserByUserIdConversationsMutation,
  useGetChatUserByUserIdConversationsAndConversationIdMessagesQuery,
  usePostChatUserByUserIdConversationsAndConversationIdMessagesMutation,
  usePostChatUserByUserIdConversationsAndConversationIdMarkAsReadMutation,
  useGetInterestsQuery,
  useGetNotificationsQuery,
  usePutNotificationsReadMutation,
  useGetIndustriesQuery,
  useGetIndustriesTestQuery,
  useGetTagsQuery,
  useGetClubsClubnamesQuery,
  usePostUsersRegistrationMutation,
  usePostUsersRegistrationByUserIdResendEmailCodeMutation,
  usePostUsersRegistrationByUserIdCheckEmailMutation,
  usePostUsersRegistrationByUserIdGeneralMutation,
  usePostUsersRegistrationByUserIdResendPhoneCodeMutation,
  usePostUsersRegistrationByUserIdCheckPhoneNumberMutation,
  useGetUserCampaignsQuery,
  useGetUserCampaignsByCampaignIdQuery,
  useGetUsersByUserIdOrdersQuery,
  useGetChatUsersByUserIdOrdersQuery,
  useGetUsersByUserIdMediasStatisticsQuery,
  useGetUsersByUserIdIgMediasQuery,
  useGetUsersByUserIdIgStoriesQuery,
  useGetUsersByUserIdIgReelsQuery,
  useDeleteOrdersByOrderIdMediasAndMediaIdMutation,
  useGetUsersByUserIdOrdersAndOrderIdIgMediasQuery,
  usePostUsersByUserIdOrdersAndOrderIdIgMediasMutation,
  usePatchUsersByUserIdOrdersAndOrderIdIgMediasMutation,
  useGetUsersByUserIdOrdersAndOrderIdIgStoriesQuery,
  usePostUsersByUserIdOrdersAndOrderIdIgStoriesMutation,
  usePatchUsersByUserIdOrdersAndOrderIdIgStoriesMutation,
  useGetUsersByUserIdOrdersAndOrderIdIgReelsQuery,
  usePostUsersByUserIdOrdersAndOrderIdIgReelsMutation,
  usePatchUsersByUserIdOrdersAndOrderIdIgReelsMutation,
  useGetUsersByUserIdYoutubeQuery,
  useGetUsersByUserIdOrdersAndOrderIdYoutubeQuery,
  usePostUsersByUserIdOrdersAndOrderIdYoutubeMutation,
  useGetUsersByUserIdYoutubeShortsQuery,
  useGetUsersByUserIdOrdersAndOrderIdYoutubeShortsQuery,
  usePostUsersByUserIdOrdersAndOrderIdYoutubeShortsMutation,
  useGetUsersByUserIdOrdersAndOrderIdTiktokQuery,
  usePostUsersByUserIdOrdersAndOrderIdTiktokMutation,
  useGetUsersByUserIdOrdersAndOrderIdBlogQuery,
  usePostUsersByUserIdOrdersAndOrderIdBlogMutation,
  usePostUploadMutation,
  usePostRefreshTokenMutation,
  usePostUsersResetPasswordMutation,
} = injectedRtkApi;
