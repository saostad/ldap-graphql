/** type-map for ldap class name user and graphql field names.
 * @note ldap attributes can have characters that are illegal in graphql schema so instead we use pascal case of lDAPDisplayName.
 */
export enum User {
  /**
   * - Admin DisplayName: Object-Class
   * - Description: Object-Class
   * - ldapDisplayName: objectClass
   * - attributeSyntax: 2.5.5.2
   * - attributeID: 2.5.4.0
   */
  objectClass = "objectClass",
  /**
   * - Admin DisplayName: Object-Category
   * - Description: Object-Category
   * - ldapDisplayName: objectCategory
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.782
   */
  objectCategory = "objectCategory",
  /**
   * - Admin DisplayName: NT-Security-Descriptor
   * - Description: NT-Security-Descriptor
   * - ldapDisplayName: nTSecurityDescriptor
   * - attributeSyntax: 2.5.5.15
   * - attributeID: 1.2.840.113556.1.2.281
   */
  nTSecurityDescriptor = "nTSecurityDescriptor",
  /**
   * - Admin DisplayName: Instance-Type
   * - Description: Instance-Type
   * - ldapDisplayName: instanceType
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.1
   */
  instanceType = "instanceType",
  /**
   * - Admin DisplayName: ms-Exch-UG-Event-Subscription-BL
   * - Description: ms-Exch-UG-Event-Subscription-BL
   * - ldapDisplayName: msExchUGEventSubscriptionBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52160
   */
  msExchUgEventSubscriptionBl = "msExchUGEventSubscriptionBL",
  /**
   * - Admin DisplayName: ms-Exch-Administrative-Unit-BL
   * - Description: ms-Exch-Administrative-Unit-BL
   * - ldapDisplayName: msExchAdministrativeUnitBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52158
   */
  msExchAdministrativeUnitBl = "msExchAdministrativeUnitBL",
  /**
   * - Admin DisplayName: ms-Exch-Auth-Policy-BL
   * - Description: ms-Exch-Auth-Policy-BL
   * - ldapDisplayName: msExchAuthPolicyBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52156
   */
  msExchAuthPolicyBl = "msExchAuthPolicyBL",
  /**
   * - Admin DisplayName: ms-Exch-Data-Encryption-Policy-BL
   * - Description: ms-Exch-Data-Encryption-Policy-BL
   * - ldapDisplayName: msExchDataEncryptionPolicyBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52152
   */
  msExchDataEncryptionPolicyBl = "msExchDataEncryptionPolicyBL",
  /**
   * - Admin DisplayName: ms-Exch-Multi-Mailbox-Locations-BL
   * - Description: ms-Exch-Multi-Mailbox-Locations-BL
   * - ldapDisplayName: msExchMultiMailboxLocationsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52150
   */
  msExchMultiMailboxLocationsBl = "msExchMultiMailboxLocationsBL",
  /**
   * - Admin DisplayName: ms-Exch-Multi-Mailbox-Databases-BL
   * - Description: ms-Exch-Multi-Mailbox-Databases-BL
   * - ldapDisplayName: msExchMultiMailboxDatabasesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52149
   */
  msExchMultiMailboxDatabasesBl = "msExchMultiMailboxDatabasesBL",
  /**
   * - Admin DisplayName: ms-Exch-Aux-Mailbox-Parent-Object-Id-BL
   * - Description: ms-Exch-Aux-Mailbox-Parent-Object-Id-BL
   * - ldapDisplayName: msExchAuxMailboxParentObjectIdBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52142
   */
  msExchAuxMailboxParentObjectIdBl = "msExchAuxMailboxParentObjectIdBL",
  /**
   * - Admin DisplayName: ms-Exch-UG-Member-BL
   * - Description: ms-Exch-UG-Member-BL
   * - ldapDisplayName: msExchUGMemberBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52138
   */
  msExchUgMemberBl = "msExchUGMemberBL",
  /**
   * - Admin DisplayName: ms-Exch-OAB-Generating-Mailbox-BL
   * - Description: ms-Exch-OAB-Generating-Mailbox-BL
   * - ldapDisplayName: msExchOABGeneratingMailboxBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52133
   */
  msExchOabGeneratingMailboxBl = "msExchOABGeneratingMailboxBL",
  /**
   * - Admin DisplayName: ms-Exch-EvictedMemebers-BL
   * - Description: ms-Exch-EvictedMemebers-BL
   * - ldapDisplayName: msExchEvictedMemebersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52129
   */
  msExchEvictedMemebersBl = "msExchEvictedMemebersBL",
  /**
   * - Admin DisplayName: ms-Exch-Catch-All-Recipient-BL
   * - Description: ms-Exch-Catch-All-Recipient-BL
   * - ldapDisplayName: msExchCatchAllRecipientBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52120
   */
  msExchCatchAllRecipientBl = "msExchCatchAllRecipientBL",
  /**
   * - Admin DisplayName: ms-Exch-Associated-Accepted-Domain-BL
   * - Description: ms-Exch-Associated-Accepted-Domain-BL
   * - ldapDisplayName: msExchAssociatedAcceptedDomainBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52119
   */
  msExchAssociatedAcceptedDomainBl = "msExchAssociatedAcceptedDomainBL",
  /**
   * - Admin DisplayName: ms-Exch-MDB-Availability-Group-Configuration-BL
   * - Description: ms-Exch-MDB-Availability-Group-Configuration-BL
   * - ldapDisplayName: msExchMDBAvailabilityGroupConfigurationBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52101
   */
  msExchMdbAvailabilityGroupConfigurationBl = "msExchMDBAvailabilityGroupConfigurationBL",
  /**
   * - Admin DisplayName: ms-Exch-Transport-Rule-Target-BL
   * - Description: ms-Exch-Transport-Rule-Target-BL
   * - ldapDisplayName: msExchTransportRuleTargetBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52085
   */
  msExchTransportRuleTargetBl = "msExchTransportRuleTargetBL",
  /**
   * - Admin DisplayName: ms-Exch-Hygiene-Configuration-Spam-BL
   * - Description: ms-Exch-Hygiene-Configuration-Spam-BL
   * - ldapDisplayName: msExchHygieneConfigurationSpamBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51951
   */
  msExchHygieneConfigurationSpamBl = "msExchHygieneConfigurationSpamBL",
  /**
   * - Admin DisplayName: ms-Exch-Hygiene-Configuration-Malware-BL
   * - Description: ms-Exch-Hygiene-Configuration-Malware-BL
   * - ldapDisplayName: msExchHygieneConfigurationMalwareBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51947
   */
  msExchHygieneConfigurationMalwareBl = "msExchHygieneConfigurationMalwareBL",
  /**
   * - Admin DisplayName: ms-Exch-Accepted-Domain-BL
   * - Description: ms-Exch-Accepted-Domain-BL
   * - ldapDisplayName: msExchAcceptedDomainBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51948
   */
  msExchAcceptedDomainBl = "msExchAcceptedDomainBL",
  /**
   * - Admin DisplayName: ms-Exch-Trusted-Domain-BL
   * - Description: ms-Exch-Trusted-Domain-BL
   * - ldapDisplayName: msExchTrustedDomainBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51914
   */
  msExchTrustedDomainBl = "msExchTrustedDomainBL",
  /**
   * - Admin DisplayName: ms-Exch-Account-Forest-BL
   * - Description: ms-Exch-Account-Forest-BL
   * - ldapDisplayName: msExchAccountForestBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51915
   */
  msExchAccountForestBl = "msExchAccountForestBL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Source-User-BL
   * - Description: ms-Exch-Mailbox-Move-Source-User-BL
   * - ldapDisplayName: msExchMailboxMoveSourceUserBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51599
   */
  msExchMailboxMoveSourceUserBl = "msExchMailboxMoveSourceUserBL",
  /**
   * - Admin DisplayName: ms-Exch-HAB-Root-Department-BL
   * - Description: ms-Exch-HAB-Root-Department-BL
   * - ldapDisplayName: msExchHABRootDepartmentBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50826
   */
  msExchHabRootDepartmentBl = "msExchHABRootDepartmentBL",
  /**
   * - Admin DisplayName: ms-Org-Leaders-BL
   * - Description: ms-Org-Leaders-BL
   * - ldapDisplayName: msOrg-LeadersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.6.47.2.5
   */
  msOrgLeadersBl = "msOrg-LeadersBL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Storage-MDB-BL
   * - Description: ms-Exch-Mailbox-Move-Storage-MDB-BL
   * - ldapDisplayName: msExchMailboxMoveStorageMDBBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51601
   */
  msExchMailboxMoveStorageMdbbl = "msExchMailboxMoveStorageMDBBL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Target-User-BL
   * - Description: ms-Exch-Mailbox-Move-Target-User-BL
   * - ldapDisplayName: msExchMailboxMoveTargetUserBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51597
   */
  msExchMailboxMoveTargetUserBl = "msExchMailboxMoveTargetUserBL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Source-Archive-MDB-BL
   * - Description: ms-Exch-Mailbox-Move-Source-Archive-MDB-BL
   * - ldapDisplayName: msExchMailboxMoveSourceArchiveMDBBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51686
   */
  msExchMailboxMoveSourceArchiveMdbbl = "msExchMailboxMoveSourceArchiveMDBBL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Target-Archive-MDB-BL
   * - Description: ms-Exch-Mailbox-Move-Target-Archive-MDB-BL
   * - ldapDisplayName: msExchMailboxMoveTargetArchiveMDBBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51687
   */
  msExchMailboxMoveTargetArchiveMdbbl = "msExchMailboxMoveTargetArchiveMDBBL",
  /**
   * - Admin DisplayName: ms-Exch-Delegate-List-BL
   * - Description: ms-Exch-Delegate-List-BL
   * - ldapDisplayName: msExchDelegateListBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51538
   */
  msExchDelegateListBl = "msExchDelegateListBL",
  /**
   * - Admin DisplayName: ms-Exch-Supervision-User-BL
   * - Description: ms-Exch-Supervision-User-BL
   * - ldapDisplayName: msExchSupervisionUserBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51465
   */
  msExchSupervisionUserBl = "msExchSupervisionUserBL",
  /**
   * - Admin DisplayName: ms-Exch-Supervision-One-Off-BL
   * - Description: ms-Exch-Supervision-One-Off-BL
   * - ldapDisplayName: msExchSupervisionOneOffBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51476
   */
  msExchSupervisionOneOffBl = "msExchSupervisionOneOffBL",
  /**
   * - Admin DisplayName: ms-Exch-Supervision-DL-BL
   * - Description: ms-Exch-Supervision-DL-BL
   * - ldapDisplayName: msExchSupervisionDLBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51480
   */
  msExchSupervisionDlbl = "msExchSupervisionDLBL",
  /**
   * - Admin DisplayName: ms-Exch-SMTP-Receive-Default-Accepted-Domain-BL
   * - Description: ms-Exch-SMTP-Receive-Default-Accepted-Domain-BL
   * - ldapDisplayName: msExchSMTPReceiveDefaultAcceptedDomainBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51482
   */
  msExchSmtpReceiveDefaultAcceptedDomainBl = "msExchSMTPReceiveDefaultAcceptedDomainBL",
  /**
   * - Admin DisplayName: ms-Exch-Server-Site-BL
   * - Description: ms-Exch-Server-Site-BL
   * - ldapDisplayName: msExchServerSiteBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51469
   */
  msExchServerSiteBl = "msExchServerSiteBL",
  /**
   * - Admin DisplayName: ms-Exch-RBAC-Policy-BL
   * - Description: ms-Exch-RBAC-Policy-BL
   * - ldapDisplayName: msExchRBACPolicyBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51448
   */
  msExchRbacPolicyBl = "msExchRBACPolicyBL",
  /**
   * - Admin DisplayName: ms-Exch-Parent-Plan-BL
   * - Description: ms-Exch-Parent-Plan-BL
   * - ldapDisplayName: msExchParentPlanBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51446
   */
  msExchParentPlanBl = "msExchParentPlanBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Transcoding-Mime-Types-BL
   * - Description: ms-Exch-OWA-Transcoding-Mime-Types-BL
   * - ldapDisplayName: msExchOWATranscodingMimeTypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51477
   */
  msExchOwaTranscodingMimeTypesBl = "msExchOWATranscodingMimeTypesBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Transcoding-File-Types-BL
   * - Description: ms-Exch-OWA-Transcoding-File-Types-BL
   * - ldapDisplayName: msExchOWATranscodingFileTypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51447
   */
  msExchOwaTranscodingFileTypesBl = "msExchOWATranscodingFileTypesBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Remote-Documents-Internal-Domain-Suffix-List-BL
   * - Description: ms-Exch-OWA-Remote-Documents-Internal-Domain-Suffix-List-BL
   * - ldapDisplayName: msExchOWARemoteDocumentsInternalDomainSuffixListBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51471
   */
  msExchOwaRemoteDocumentsInternalDomainSuffixListBl = "msExchOWARemoteDocumentsInternalDomainSuffixListBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Remote-Documents-Blocked-Servers-BL
   * - Description: ms-Exch-OWA-Remote-Documents-Blocked-Servers-BL
   * - ldapDisplayName: msExchOWARemoteDocumentsBlockedServersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51464
   */
  msExchOwaRemoteDocumentsBlockedServersBl = "msExchOWARemoteDocumentsBlockedServersBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Remote-Documents-Allowed-Servers-BL
   * - Description: ms-Exch-OWA-Remote-Documents-Allowed-Servers-BL
   * - ldapDisplayName: msExchOWARemoteDocumentsAllowedServersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51481
   */
  msExchOwaRemoteDocumentsAllowedServersBl = "msExchOWARemoteDocumentsAllowedServersBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Force-Save-MIME-Types-BL
   * - Description: ms-Exch-OWA-Force-Save-MIME-Types-BL
   * - ldapDisplayName: msExchOWAForceSaveMIMETypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51463
   */
  msExchOwaForceSaveMimeTypesBl = "msExchOWAForceSaveMIMETypesBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Force-Save-File-Types-BL
   * - Description: ms-Exch-OWA-Force-Save-File-Types-BL
   * - ldapDisplayName: msExchOWAForceSaveFileTypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51479
   */
  msExchOwaForceSaveFileTypesBl = "msExchOWAForceSaveFileTypesBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Blocked-MIME-Types-BL
   * - Description: ms-Exch-OWA-Blocked-MIME-Types-BL
   * - ldapDisplayName: msExchOWABlockedMIMETypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51474
   */
  msExchOwaBlockedMimeTypesBl = "msExchOWABlockedMIMETypesBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Blocked-File-Types-BL
   * - Description: ms-Exch-OWA-Blocked-File-Types-BL
   * - ldapDisplayName: msExchOWABlockedFileTypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51470
   */
  msExchOwaBlockedFileTypesBl = "msExchOWABlockedFileTypesBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Allowed-Mime-Types-BL
   * - Description: ms-Exch-OWA-Allowed-Mime-Types-BL
   * - ldapDisplayName: msExchOWAAllowedMimeTypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51473
   */
  msExchOwaAllowedMimeTypesBl = "msExchOWAAllowedMimeTypesBL",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Allowed-File-Types-BL
   * - Description: ms-Exch-OWA-Allowed-File-Types-BL
   * - ldapDisplayName: msExchOWAAllowedFileTypesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51468
   */
  msExchOwaAllowedFileTypesBl = "msExchOWAAllowedFileTypesBL",
  /**
   * - Admin DisplayName: ms-Exch-Organizations-Template-Roots-BL
   * - Description: ms-Exch-Organizations-Template-Roots-BL
   * - ldapDisplayName: msExchOrganizationsTemplateRootsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51467
   */
  msExchOrganizationsTemplateRootsBl = "msExchOrganizationsTemplateRootsBL",
  /**
   * - Admin DisplayName: ms-Exch-Organizations-Global-Address-Lists-BL
   * - Description: ms-Exch-Organizations-Global-Address-Lists-BL
   * - ldapDisplayName: msExchOrganizationsGlobalAddressListsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51478
   */
  msExchOrganizationsGlobalAddressListsBl = "msExchOrganizationsGlobalAddressListsBL",
  /**
   * - Admin DisplayName: ms-Exch-Organizations-Address-Book-Roots-BL
   * - Description: ms-Exch-Organizations-Address-Book-Roots-BL
   * - ldapDisplayName: msExchOrganizationsAddressBookRootsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51472
   */
  msExchOrganizationsAddressBookRootsBl = "msExchOrganizationsAddressBookRootsBL",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Remote-Documents-Internal-Domain-Suffix-List-BL
   * - Description: ms-Exch-Mobile-Remote-Documents-Internal-Domain-Suffix-List-BL
   * - ldapDisplayName: msExchMobileRemoteDocumentsInternalDomainSuffixListBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51475
   */
  msExchMobileRemoteDocumentsInternalDomainSuffixListBl = "msExchMobileRemoteDocumentsInternalDomainSuffixListBL",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Remote-Documents-Blocked-Servers-BL
   * - Description: ms-Exch-Mobile-Remote-Documents-Blocked-Servers-BL
   * - ldapDisplayName: msExchMobileRemoteDocumentsBlockedServersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51466
   */
  msExchMobileRemoteDocumentsBlockedServersBl = "msExchMobileRemoteDocumentsBlockedServersBL",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Remote-Documents-Allowed-Servers-BL
   * - Description: ms-Exch-Mobile-Remote-Documents-Allowed-Servers-BL
   * - ldapDisplayName: msExchMobileRemoteDocumentsAllowedServersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51483
   */
  msExchMobileRemoteDocumentsAllowedServersBl = "msExchMobileRemoteDocumentsAllowedServersBL",
  /**
   * - Admin DisplayName: ms-Exch-Availability-Per-User-Account-BL
   * - Description: ms-Exch-Availability-Per-User-Account-BL
   * - ldapDisplayName: msExchAvailabilityPerUserAccountBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51462
   */
  msExchAvailabilityPerUserAccountBl = "msExchAvailabilityPerUserAccountBL",
  /**
   * - Admin DisplayName: ms-Exch-Availability-Org-Wide-Account-BL
   * - Description: ms-Exch-Availability-Org-Wide-Account-BL
   * - ldapDisplayName: msExchAvailabilityOrgWideAccountBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51461
   */
  msExchAvailabilityOrgWideAccountBl = "msExchAvailabilityOrgWideAccountBL",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Database-BL
   * - Description: ms-Exch-Archive-Database-BL
   * - ldapDisplayName: msExchArchiveDatabaseBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51449
   */
  msExchArchiveDatabaseBl = "msExchArchiveDatabaseBL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Target-MDB-BL
   * - Description: ms-Exch-Mailbox-Move-Target-MDB-BL
   * - ldapDisplayName: msExchMailboxMoveTargetMDBBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51399
   */
  msExchMailboxMoveTargetMdbbl = "msExchMailboxMoveTargetMDBBL",
  /**
   * - Admin DisplayName: ms-Exch-User-BL
   * - Description: ms-Exch-User-BL
   * - ldapDisplayName: msExchUserBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51260
   */
  msExchUserBl = "msExchUserBL",
  /**
   * - Admin DisplayName: ms-Exch-Server-Association-BL
   * - Description: ms-Exch-Server-Association-BL
   * - ldapDisplayName: msExchServerAssociationBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51248
   */
  msExchServerAssociationBl = "msExchServerAssociationBL",
  /**
   * - Admin DisplayName: ms-Exch-Device-Access-Control-Rule-BL
   * - Description: ms-Exch-Device-Access-Control-Rule-BL
   * - ldapDisplayName: msExchDeviceAccessControlRuleBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51504
   */
  msExchDeviceAccessControlRuleBl = "msExchDeviceAccessControlRuleBL",
  /**
   * - Admin DisplayName: ms-Exch-Intended-Mailbox-Plan-BL
   * - Description: ms-Exch-Intended-Mailbox-Plan-BL
   * - ldapDisplayName: msExchIntendedMailboxPlanBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51564
   */
  msExchIntendedMailboxPlanBl = "msExchIntendedMailboxPlanBL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Source-MDB-BL
   * - Description: ms-Exch-Mailbox-Move-Source-MDB-BL
   * - ldapDisplayName: msExchMailboxMoveSourceMDBBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51440
   */
  msExchMailboxMoveSourceMdbbl = "msExchMailboxMoveSourceMDBBL",
  /**
   * - Admin DisplayName: ms-Exch-RMS-Computer-Accounts-BL
   * - Description: ms-Exch-RMS-Computer-Accounts-BL
   * - ldapDisplayName: msExchRMSComputerAccountsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51523
   */
  msExchRmsComputerAccountsBl = "msExchRMSComputerAccountsBL",
  /**
   * - Admin DisplayName: ms-DFSR-ComputerReferenceBL
   * - Description: Backlink attribute for ms-DFSR-ComputerReference
   * - ldapDisplayName: msDFSR-ComputerReferenceBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.6.13.3.103
   */
  msDfsrComputerReferenceBl = "msDFSR-ComputerReferenceBL",
  /**
   * - Admin DisplayName: ms-DFSR-MemberReferenceBL
   * - Description: Backlink attribute for ms-DFSR-MemberReference
   * - ldapDisplayName: msDFSR-MemberReferenceBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.6.13.3.102
   */
  msDfsrMemberReferenceBl = "msDFSR-MemberReferenceBL",
  /**
   * - Admin DisplayName: msSFU-30-Posix-Member-Of
   * - Description: stores the display names of groups to which this user belongs to
   * - ldapDisplayName: msSFU30PosixMemberOf
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.6.18.1.347
   */
  msSfu30PosixMemberOf = "msSFU30PosixMemberOf",
  /**
   * - Admin DisplayName: ms-DS-Object-Reference-BL
   * - Description: Back link for ms-DS-Object-Reference.
   * - ldapDisplayName: msDS-ObjectReferenceBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1841
   */
  msDsObjectReferenceBl = "msDS-ObjectReferenceBL",
  /**
   * - Admin DisplayName: ms-DS-Object-SOA
   * - Description: This attribute is used to identify the source of authority of the object.
   * - ldapDisplayName: msDS-ObjectSoa
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2353
   */
  msDsObjectSoa = "msDS-ObjectSoa",
  /**
   * - Admin DisplayName: ms-DS-Source-Anchor
   * - Description: Unique, immutable identifier for the object in the authoritative directory.
   * - ldapDisplayName: msDS-SourceAnchor
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2352
   */
  msDsSourceAnchor = "msDS-SourceAnchor",
  /**
   * - Admin DisplayName: ms-DS-Cloud-Anchor
   * - Description: This attribute is used by the DirSync engine to indicate the object SOA and to maintain the relationship between the on-premises and cloud object.
   * - ldapDisplayName: msDS-CloudAnchor
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.2273
   */
  msDsCloudAnchor = "msDS-CloudAnchor",
  /**
   * - Admin DisplayName: ms-DS-Repl-Value-Meta-Data-Ext
   * - Description: ms-DS-Repl-Value-Meta-Data-Ext
   * - ldapDisplayName: msDS-ReplValueMetaDataExt
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2235
   */
  msDsReplValueMetaDataExt = "msDS-ReplValueMetaDataExt",
  /**
   * - Admin DisplayName: ms-DS-Parent-Dist-Name
   * - Description: ms-DS-Parent-Dist-Name
   * - ldapDisplayName: msDS-parentdistname
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2203
   */
  msDsParentdistname = "msDS-parentdistname",
  /**
   * - Admin DisplayName: msds-memberOfTransitive
   * - Description: msds-memberOfTransitive
   * - ldapDisplayName: msds-memberOfTransitive
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2236
   */
  msdsMemberOfTransitive = "msds-memberOfTransitive",
  /**
   * - Admin DisplayName: msds-memberTransitive
   * - Description: msds-memberTransitive
   * - ldapDisplayName: msds-memberTransitive
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2238
   */
  msdsMemberTransitive = "msds-memberTransitive",
  /**
   * - Admin DisplayName: ms-DS-TDO-Egress-BL
   * - Description: Backlink to TDO Egress rules link on object.
   * - ldapDisplayName: msDS-TDOEgressBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2194
   */
  msDsTdoEgressBl = "msDS-TDOEgressBL",
  /**
   * - Admin DisplayName: ms-DS-TDO-Ingress-BL
   * - Description: Backlink to TDO Ingress rules link on object.
   * - ldapDisplayName: msDS-TDOIngressBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2193
   */
  msDsTdoIngressBl = "msDS-TDOIngressBL",
  /**
   * - Admin DisplayName: ms-DS-Value-Type-Reference-BL
   * - Description: This is the back link for ms-DS-Value-Type-Reference. It links a value type object back to resource properties.
   * - ldapDisplayName: msDS-ValueTypeReferenceBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2188
   */
  msDsValueTypeReferenceBl = "msDS-ValueTypeReferenceBL",
  /**
   * - Admin DisplayName: ms-DS-Is-Primary-Computer-For
   * - Description: Backlink atribute for msDS-IsPrimaryComputer.
   * - ldapDisplayName: msDS-IsPrimaryComputerFor
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2168
   */
  msDsIsPrimaryComputerFor = "msDS-IsPrimaryComputerFor",
  /**
   * - Admin DisplayName: ms-DS-Members-Of-Resource-Property-List-BL
   * - Description: Backlink for ms-DS-Members-Of-Resource-Property-List. For a resource property object, this attribute references the resource property list object that it is a member of.
   * - ldapDisplayName: msDS-MembersOfResourcePropertyListBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2104
   */
  msDsMembersOfResourcePropertyListBl = "msDS-MembersOfResourcePropertyListBL",
  /**
   * - Admin DisplayName: ms-DS-Claim-Shares-Possible-Values-With-BL
   * - Description: For a claim type object, this attribute indicates that the possible values described in ms-DS-Claim-Possible-Values are being referenced by other claim type objects.
   * - ldapDisplayName: msDS-ClaimSharesPossibleValuesWithBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2102
   */
  msDsClaimSharesPossibleValuesWithBl = "msDS-ClaimSharesPossibleValuesWithBL",
  /**
   * - Admin DisplayName: ms-DS-KrbTgt-Link-BL
   * - Description: Backlink for ms-DS-KrbTgt-Link; for a user object (krbtgt) acting as a domain or secondary domain master secret, identifies which computers are in that domain or secondary domain
   * - ldapDisplayName: msDS-KrbTgtLinkBl
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1931
   */
  msDsKrbTgtLinkBl = "msDS-KrbTgtLinkBl",
  /**
   * - Admin DisplayName: ms-DS-Revealed-DSAs
   * - Description: Backlink for ms-DS-Revealed-Users; for a user, identifies which Directory instances (DSA) hold that user's secret
   * - ldapDisplayName: msDS-RevealedDSAs
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1930
   */
  msDsRevealedDsAs = "msDS-RevealedDSAs",
  /**
   * - Admin DisplayName: ms-DS-Is-Full-Replica-For
   * - Description: Backlink for ms-Ds-Has-Full-Replica-NCs; for a partition root object, identifies which Directory instances (DSA) hold that partition as a full replica
   * - ldapDisplayName: msDS-IsFullReplicaFor
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1932
   */
  msDsIsFullReplicaFor = "msDS-IsFullReplicaFor",
  /**
   * - Admin DisplayName: ms-DS-Is-Domain-For
   * - Description: Backlink for ms-DS-Has-Domain-NCs; for a partition root object, identifies which Directory instances (DSA) hold that partition as their primary domain
   * - ldapDisplayName: msDS-IsDomainFor
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1933
   */
  msDsIsDomainFor = "msDS-IsDomainFor",
  /**
   * - Admin DisplayName: ms-DS-Is-Partial-Replica-For
   * - Description: Backlink for has-Partial-Replica-NCs; for a partition root object, identifies which Directory instances (DSA) hold that partition as a partial replica
   * - ldapDisplayName: msDS-IsPartialReplicaFor
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1934
   */
  msDsIsPartialReplicaFor = "msDS-IsPartialReplicaFor",
  /**
   * - Admin DisplayName: ms-DS-AuthenticatedTo-Accountlist
   * - Description: Backlink for ms-DS-AuthenticatedAt-DC; for a Computer, identifies which users have authenticated to this Computer
   * - ldapDisplayName: msDS-AuthenticatedToAccountlist
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1957
   */
  msDsAuthenticatedToAccountlist = "msDS-AuthenticatedToAccountlist",
  /**
   * - Admin DisplayName: ms-DS-Revealed-List-BL
   * - Description: backlink attribute for ms-DS-Revealed-List.
   * - ldapDisplayName: msDS-RevealedListBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1975
   */
  msDsRevealedListBl = "msDS-RevealedListBL",
  /**
   * - Admin DisplayName: ms-DS-Principal-Name
   * - Description: Account name for the security principal (constructed)
   * - ldapDisplayName: msDS-PrincipalName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1865
   */
  msDsPrincipalName = "msDS-PrincipalName",
  /**
   * - Admin DisplayName: Password settings object applied
   * - Description: Password settings object applied to this object
   * - ldapDisplayName: msDS-PSOApplied
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2021
   */
  msDsPsoApplied = "msDS-PSOApplied",
  /**
   * - Admin DisplayName: ms-DS-NC-Type
   * - Description: A bit field that maintains information about aspects of a NC replica that are relevant to replication.
   * - ldapDisplayName: msDS-NcType
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.2024
   */
  msDsNcType = "msDS-NcType",
  /**
   * - Admin DisplayName: ms-DS-NC-RO-Replica-Locations-BL
   * - Description: backlink attribute for ms-DS-NC-RO-Replica-Locations.
   * - ldapDisplayName: msDS-NC-RO-Replica-Locations-BL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1968
   */
  msDsNcRoReplicaLocationsBl = "msDS-NC-RO-Replica-Locations-BL",
  /**
   * - Admin DisplayName: ms-DS-OIDToGroup-Link-BL
   * - Description: Backlink for ms-DS-OIDToGroup-Link; identifies the issuance policy, represented by an OID object, which is mapped to this group.
   * - ldapDisplayName: msDS-OIDToGroupLinkBl
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2052
   */
  msDsOidToGroupLinkBl = "msDS-OIDToGroupLinkBl",
  /**
   * - Admin DisplayName: ms-DS-Host-Service-Account-BL
   * - Description: Service Accounts Back Link for linking machines associated with the service account.
   * - ldapDisplayName: msDS-HostServiceAccountBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2057
   */
  msDsHostServiceAccountBl = "msDS-HostServiceAccountBL",
  /**
   * - Admin DisplayName: Is-Recycled
   * - Description: Is the object recycled.
   * - ldapDisplayName: isRecycled
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.2058
   */
  isRecycled = "isRecycled",
  /**
   * - Admin DisplayName: ms-DS-Local-Effective-Deletion-Time
   * - Description: Deletion time of the object in the local DIT.
   * - ldapDisplayName: msDS-LocalEffectiveDeletionTime
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.2059
   */
  msDsLocalEffectiveDeletionTime = "msDS-LocalEffectiveDeletionTime",
  /**
   * - Admin DisplayName: ms-DS-Local-Effective-Recycle-Time
   * - Description: Recycle time of the object in the local DIT.
   * - ldapDisplayName: msDS-LocalEffectiveRecycleTime
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.2060
   */
  msDsLocalEffectiveRecycleTime = "msDS-LocalEffectiveRecycleTime",
  /**
   * - Admin DisplayName: ms-DS-Last-Known-RDN
   * - Description: Holds original RDN of a deleted object.
   * - ldapDisplayName: msDS-LastKnownRDN
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2067
   */
  msDsLastKnownRdn = "msDS-LastKnownRDN",
  /**
   * - Admin DisplayName: ms-DS-Enabled-Feature-BL
   * - Description: Scopes where this optional feature is enabled.
   * - ldapDisplayName: msDS-EnabledFeatureBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2069
   */
  msDsEnabledFeatureBl = "msDS-EnabledFeatureBL",
  /**
   * - Admin DisplayName: WWW-Page-Other
   * - Description: WWW-Page-Other
   * - ldapDisplayName: url
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.749
   */
  url = "url",
  /**
   * - Admin DisplayName: WWW-Home-Page
   * - Description: WWW-Home-Page
   * - ldapDisplayName: wWWHomePage
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.464
   */
  wWwHomePage = "wWWHomePage",
  /**
   * - Admin DisplayName: When-Created
   * - Description: When-Created
   * - ldapDisplayName: whenCreated
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.2.2
   */
  whenCreated = "whenCreated",
  /**
   * - Admin DisplayName: When-Changed
   * - Description: When-Changed
   * - ldapDisplayName: whenChanged
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.2.3
   */
  whenChanged = "whenChanged",
  /**
   * - Admin DisplayName: Well-Known-Objects
   * - Description: Well-Known-Objects
   * - ldapDisplayName: wellKnownObjects
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.4.618
   */
  wellKnownObjects = "wellKnownObjects",
  /**
   * - Admin DisplayName: Wbem-Path
   * - Description: Wbem-Path
   * - ldapDisplayName: wbemPath
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.301
   */
  wbemPath = "wbemPath",
  /**
   * - Admin DisplayName: USN-Source
   * - Description: USN-Source
   * - ldapDisplayName: uSNSource
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.896
   */
  uSnSource = "uSNSource",
  /**
   * - Admin DisplayName: USN-Last-Obj-Rem
   * - Description: USN-Last-Obj-Rem
   * - ldapDisplayName: uSNLastObjRem
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.2.121
   */
  uSnLastObjRem = "uSNLastObjRem",
  /**
   * - Admin DisplayName: USN-Intersite
   * - Description: USN-Intersite
   * - ldapDisplayName: USNIntersite
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.469
   */
  usnIntersite = "USNIntersite",
  /**
   * - Admin DisplayName: USN-DSA-Last-Obj-Removed
   * - Description: USN-DSA-Last-Obj-Removed
   * - ldapDisplayName: uSNDSALastObjRemoved
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.2.267
   */
  uSndsaLastObjRemoved = "uSNDSALastObjRemoved",
  /**
   * - Admin DisplayName: USN-Created
   * - Description: USN-Created
   * - ldapDisplayName: uSNCreated
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.2.19
   */
  uSnCreated = "uSNCreated",
  /**
   * - Admin DisplayName: USN-Changed
   * - Description: USN-Changed
   * - ldapDisplayName: uSNChanged
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.2.120
   */
  uSnChanged = "uSNChanged",
  /**
   * - Admin DisplayName: System-Flags
   * - Description: System-Flags
   * - ldapDisplayName: systemFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.375
   */
  systemFlags = "systemFlags",
  /**
   * - Admin DisplayName: SubSchemaSubEntry
   * - Description: SubSchemaSubEntry
   * - ldapDisplayName: subSchemaSubEntry
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 2.5.18.10
   */
  subSchemaSubEntry = "subSchemaSubEntry",
  /**
   * - Admin DisplayName: Sub-Refs
   * - Description: Sub-Refs
   * - ldapDisplayName: subRefs
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.7
   */
  subRefs = "subRefs",
  /**
   * - Admin DisplayName: Structural-Object-Class
   * - Description: The class hierarchy without auxiliary classes
   * - ldapDisplayName: structuralObjectClass
   * - attributeSyntax: 2.5.5.2
   * - attributeID: 2.5.21.9
   */
  structuralObjectClass = "structuralObjectClass",
  /**
   * - Admin DisplayName: Site-Object-BL
   * - Description: Site-Object-BL
   * - ldapDisplayName: siteObjectBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.513
   */
  siteObjectBl = "siteObjectBL",
  /**
   * - Admin DisplayName: Server-Reference-BL
   * - Description: Server-Reference-BL
   * - ldapDisplayName: serverReferenceBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.516
   */
  serverReferenceBl = "serverReferenceBL",
  /**
   * - Admin DisplayName: SD-Rights-Effective
   * - Description: SD-Rights-Effective
   * - ldapDisplayName: sDRightsEffective
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1304
   */
  sDRightsEffective = "sDRightsEffective",
  /**
   * - Admin DisplayName: Revision
   * - Description: Revision
   * - ldapDisplayName: revision
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.145
   */
  revision = "revision",
  /**
   * - Admin DisplayName: Reps-To
   * - Description: Reps-To
   * - ldapDisplayName: repsTo
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.83
   */
  repsTo = "repsTo",
  /**
   * - Admin DisplayName: Reps-From
   * - Description: Reps-From
   * - ldapDisplayName: repsFrom
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.91
   */
  repsFrom = "repsFrom",
  /**
   * - Admin DisplayName: Reports
   * - Description: Reports
   * - ldapDisplayName: directReports
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.436
   */
  directReports = "directReports",
  /**
   * - Admin DisplayName: Repl-UpToDate-Vector
   * - Description: Repl-UpToDate-Vector
   * - ldapDisplayName: replUpToDateVector
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.4
   */
  replUpToDateVector = "replUpToDateVector",
  /**
   * - Admin DisplayName: Repl-Property-Meta-Data
   * - Description: Repl-Property-Meta-Data
   * - ldapDisplayName: replPropertyMetaData
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.3
   */
  replPropertyMetaData = "replPropertyMetaData",
  /**
   * - Admin DisplayName: RDN
   * - Description: RDN
   * - ldapDisplayName: name
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1
   */
  name = "name",
  /**
   * - Admin DisplayName: Query-Policy-BL
   * - Description: Query-Policy-BL
   * - ldapDisplayName: queryPolicyBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.608
   */
  queryPolicyBl = "queryPolicyBL",
  /**
   * - Admin DisplayName: Proxy-Addresses
   * - Description: Proxy-Addresses
   * - ldapDisplayName: proxyAddresses
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.210
   */
  proxyAddresses = "proxyAddresses",
  /**
   * - Admin DisplayName: Proxied-Object-Name
   * - Description: Proxied-Object-Name
   * - ldapDisplayName: proxiedObjectName
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.4.1249
   */
  proxiedObjectName = "proxiedObjectName",
  /**
   * - Admin DisplayName: Possible-Inferiors
   * - Description: Possible-Inferiors
   * - ldapDisplayName: possibleInferiors
   * - attributeSyntax: 2.5.5.2
   * - attributeID: 1.2.840.113556.1.4.915
   */
  possibleInferiors = "possibleInferiors",
  /**
   * - Admin DisplayName: Partial-Attribute-Set
   * - Description: Partial-Attribute-Set
   * - ldapDisplayName: partialAttributeSet
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.640
   */
  partialAttributeSet = "partialAttributeSet",
  /**
   * - Admin DisplayName: Partial-Attribute-Deletion-List
   * - Description: Partial-Attribute-Deletion-List
   * - ldapDisplayName: partialAttributeDeletionList
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.663
   */
  partialAttributeDeletionList = "partialAttributeDeletionList",
  /**
   * - Admin DisplayName: Other-Well-Known-Objects
   * - Description: Other-Well-Known-Objects
   * - ldapDisplayName: otherWellKnownObjects
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.4.1359
   */
  otherWellKnownObjects = "otherWellKnownObjects",
  /**
   * - Admin DisplayName: Object-Version
   * - Description: Object-Version
   * - ldapDisplayName: objectVersion
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.76
   */
  objectVersion = "objectVersion",
  /**
   * - Admin DisplayName: Object-Guid
   * - Description: Object-Guid
   * - ldapDisplayName: objectGUID
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.2
   */
  objectGuid = "objectGUID",
  /**
   * - Admin DisplayName: Obj-Dist-Name
   * - Description: Obj-Dist-Name
   * - ldapDisplayName: distinguishedName
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 2.5.4.49
   */
  distinguishedName = "distinguishedName",
  /**
   * - Admin DisplayName: Non-Security-Member-BL
   * - Description: Non-Security-Member-BL
   * - ldapDisplayName: nonSecurityMemberBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.531
   */
  nonSecurityMemberBl = "nonSecurityMemberBL",
  /**
   * - Admin DisplayName: netboot-SCP-BL
   * - Description: netboot-SCP-BL
   * - ldapDisplayName: netbootSCPBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.864
   */
  netbootScpbl = "netbootSCPBL",
  /**
   * - Admin DisplayName: ms-Exch-Owner-BL
   * - Description: ms-Exch-Owner-BL
   * - ldapDisplayName: ownerBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.104
   */
  ownerBl = "ownerBL",
  /**
   * - Admin DisplayName: ms-DS-Repl-Value-Meta-Data
   * - Description: ms-DS-Repl-Value-Meta-Data
   * - ldapDisplayName: msDS-ReplValueMetaData
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1708
   */
  msDsReplValueMetaData = "msDS-ReplValueMetaData",
  /**
   * - Admin DisplayName: ms-DS-Repl-Attribute-Meta-Data
   * - Description: ms-DS-Repl-Attribute-Meta-Data
   * - ldapDisplayName: msDS-ReplAttributeMetaData
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1707
   */
  msDsReplAttributeMetaData = "msDS-ReplAttributeMetaData",
  /**
   * - Admin DisplayName: ms-DS-Non-Members-BL
   * - Description: MS-DS-Non-Members-BL
   * - ldapDisplayName: msDS-NonMembersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1794
   */
  msDsNonMembersBl = "msDS-NonMembersBL",
  /**
   * - Admin DisplayName: ms-DS-NC-Repl-Outbound-Neighbors
   * - Description: ms-DS-NC-Repl-Outbound-Neighbors
   * - ldapDisplayName: msDS-NCReplOutboundNeighbors
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1706
   */
  msDsNcReplOutboundNeighbors = "msDS-NCReplOutboundNeighbors",
  /**
   * - Admin DisplayName: ms-DS-NC-Repl-Inbound-Neighbors
   * - Description: ms-DS-NC-Repl-Inbound-Neighbors
   * - ldapDisplayName: msDS-NCReplInboundNeighbors
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1705
   */
  msDsNcReplInboundNeighbors = "msDS-NCReplInboundNeighbors",
  /**
   * - Admin DisplayName: ms-DS-NC-Repl-Cursors
   * - Description: ms-DS-NC-Repl-Cursors
   * - ldapDisplayName: msDS-NCReplCursors
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1704
   */
  msDsNcReplCursors = "msDS-NCReplCursors",
  /**
   * - Admin DisplayName: MS-DS-Tasks-For-Az-Role-BL
   * - Description: Back-link from Az-Task to Az-Role object(s) linking to it
   * - ldapDisplayName: msDS-TasksForAzRoleBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1815
   */
  msDsTasksForAzRoleBl = "msDS-TasksForAzRoleBL",
  /**
   * - Admin DisplayName: MS-DS-Tasks-For-Az-Task-BL
   * - Description: Back-link from Az-Task to the Az-Task object(s) linking to it
   * - ldapDisplayName: msDS-TasksForAzTaskBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1811
   */
  msDsTasksForAzTaskBl = "msDS-TasksForAzTaskBL",
  /**
   * - Admin DisplayName: MS-DS-Operations-For-Az-Role-BL
   * - Description: Back-link from Az-Operation to Az-Role object(s) linking to it
   * - ldapDisplayName: msDS-OperationsForAzRoleBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1813
   */
  msDsOperationsForAzRoleBl = "msDS-OperationsForAzRoleBL",
  /**
   * - Admin DisplayName: MS-DS-Operations-For-Az-Task-BL
   * - Description: Back-link from Az-Operation to Az-Task object(s) linking to it
   * - ldapDisplayName: msDS-OperationsForAzTaskBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1809
   */
  msDsOperationsForAzTaskBl = "msDS-OperationsForAzTaskBL",
  /**
   * - Admin DisplayName: MS-DS-Members-For-Az-Role-BL
   * - Description: Back-link from member application group or user to Az-Role object(s) linking to it
   * - ldapDisplayName: msDS-MembersForAzRoleBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1807
   */
  msDsMembersForAzRoleBl = "msDS-MembersForAzRoleBL",
  /**
   * - Admin DisplayName: ms-DS-Mastered-By
   * - Description: Back link for msDS-hasMasterNCs.
   * - ldapDisplayName: msDs-masteredBy
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1837
   */
  msDsMasteredBy = "msDs-masteredBy",
  /**
   * - Admin DisplayName: MS-DS-Consistency-Guid
   * - Description: MS-DS-Consistency-Guid
   * - ldapDisplayName: mS-DS-ConsistencyGuid
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.1360
   */
  mSDsConsistencyGuid = "mS-DS-ConsistencyGuid",
  /**
   * - Admin DisplayName: MS-DS-Consistency-Child-Count
   * - Description: MS-DS-Consistency-Child-Count
   * - ldapDisplayName: mS-DS-ConsistencyChildCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1361
   */
  mSDsConsistencyChildCount = "mS-DS-ConsistencyChildCount",
  /**
   * - Admin DisplayName: ms-DS-Approx-Immed-Subordinates
   * - Description: ms-DS-Approx-Immed-Subordinates
   * - ldapDisplayName: msDS-Approx-Immed-Subordinates
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1669
   */
  msDsApproxImmedSubordinates = "msDS-Approx-Immed-Subordinates",
  /**
   * - Admin DisplayName: ms-COM-PartitionSetLink
   * - Description: Link from a Partition to a PartitionSet. Default = adminDisplayName
   * - ldapDisplayName: msCOM-PartitionSetLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1424
   */
  msComPartitionSetLink = "msCOM-PartitionSetLink",
  /**
   * - Admin DisplayName: ms-COM-UserLink
   * - Description: Link from a PartitionSet to a User. Default = adminDisplayName
   * - ldapDisplayName: msCOM-UserLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1425
   */
  msComUserLink = "msCOM-UserLink",
  /**
   * - Admin DisplayName: Modify-Time-Stamp
   * - Description: Modify-Time-Stamp
   * - ldapDisplayName: modifyTimeStamp
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 2.5.18.2
   */
  modifyTimeStamp = "modifyTimeStamp",
  /**
   * - Admin DisplayName: Mastered-By
   * - Description: Mastered-By
   * - ldapDisplayName: masteredBy
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1409
   */
  masteredBy = "masteredBy",
  /**
   * - Admin DisplayName: Managed-Objects
   * - Description: Managed-Objects
   * - ldapDisplayName: managedObjects
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.654
   */
  managedObjects = "managedObjects",
  /**
   * - Admin DisplayName: Last-Known-Parent
   * - Description: Last-Known-Parent
   * - ldapDisplayName: lastKnownParent
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.781
   */
  lastKnownParent = "lastKnownParent",
  /**
   * - Admin DisplayName: Is-Privilege-Holder
   * - Description: Is-Privilege-Holder
   * - ldapDisplayName: isPrivilegeHolder
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.638
   */
  isPrivilegeHolder = "isPrivilegeHolder",
  /**
   * - Admin DisplayName: Is-Member-Of-DL
   * - Description: Is-Member-Of-DL
   * - ldapDisplayName: memberOf
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.102
   */
  memberOf = "memberOf",
  /**
   * - Admin DisplayName: Is-Deleted
   * - Description: Is-Deleted
   * - ldapDisplayName: isDeleted
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.2.48
   */
  isDeleted = "isDeleted",
  /**
   * - Admin DisplayName: Is-Critical-System-Object
   * - Description: Is-Critical-System-Object
   * - ldapDisplayName: isCriticalSystemObject
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.868
   */
  isCriticalSystemObject = "isCriticalSystemObject",
  /**
   * - Admin DisplayName: Show-In-Advanced-View-Only
   * - Description: Show-In-Advanced-View-Only
   * - ldapDisplayName: showInAdvancedViewOnly
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.2.169
   */
  showInAdvancedViewOnly = "showInAdvancedViewOnly",
  /**
   * - Admin DisplayName: FSMO-Role-Owner
   * - Description: FSMO-Role-Owner
   * - ldapDisplayName: fSMORoleOwner
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.369
   */
  fSmoRoleOwner = "fSMORoleOwner",
  /**
   * - Admin DisplayName: FRS-Member-Reference-BL
   * - Description: FRS-Member-Reference-BL
   * - ldapDisplayName: fRSMemberReferenceBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.876
   */
  fRsMemberReferenceBl = "fRSMemberReferenceBL",
  /**
   * - Admin DisplayName: Frs-Computer-Reference-BL
   * - Description: Frs-Computer-Reference-BL
   * - ldapDisplayName: frsComputerReferenceBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.870
   */
  frsComputerReferenceBl = "frsComputerReferenceBL",
  /**
   * - Admin DisplayName: From-Entry
   * - Description: From-Entry
   * - ldapDisplayName: fromEntry
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.910
   */
  fromEntry = "fromEntry",
  /**
   * - Admin DisplayName: Flags
   * - Description: Flags
   * - ldapDisplayName: flags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.38
   */
  flags = "flags",
  /**
   * - Admin DisplayName: Extension-Name
   * - Description: Extension-Name
   * - ldapDisplayName: extensionName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.227
   */
  extensionName = "extensionName",
  /**
   * - Admin DisplayName: DSA-Signature
   * - Description: DSA-Signature
   * - ldapDisplayName: dSASignature
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.74
   */
  dSaSignature = "dSASignature",
  /**
   * - Admin DisplayName: DS-Core-Propagation-Data
   * - Description: DS-Core-Propagation-Data
   * - ldapDisplayName: dSCorePropagationData
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.1357
   */
  dSCorePropagationData = "dSCorePropagationData",
  /**
   * - Admin DisplayName: Display-Name-Printable
   * - Description: Display-Name-Printable
   * - ldapDisplayName: displayNamePrintable
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.2.353
   */
  displayNamePrintable = "displayNamePrintable",
  /**
   * - Admin DisplayName: Display-Name
   * - Description: Display-Name
   * - ldapDisplayName: displayName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.13
   */
  displayName = "displayName",
  /**
   * - Admin DisplayName: Description
   * - Description: Description
   * - ldapDisplayName: description
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.13
   */
  description = "description",
  /**
   * - Admin DisplayName: Create-Time-Stamp
   * - Description: Create-Time-Stamp
   * - ldapDisplayName: createTimeStamp
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 2.5.18.1
   */
  createTimeStamp = "createTimeStamp",
  /**
   * - Admin DisplayName: Common-Name
   * - Description: Common-Name
   * - ldapDisplayName: cn
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.3
   */
  cn = "cn",
  /**
   * - Admin DisplayName: Canonical-Name
   * - Description: Canonical-Name
   * - ldapDisplayName: canonicalName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.916
   */
  canonicalName = "canonicalName",
  /**
   * - Admin DisplayName: Bridgehead-Server-List-BL
   * - Description: Bridgehead-Server-List-BL
   * - ldapDisplayName: bridgeheadServerListBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.820
   */
  bridgeheadServerListBl = "bridgeheadServerListBL",
  /**
   * - Admin DisplayName: Allowed-Child-Classes-Effective
   * - Description: Allowed-Child-Classes-Effective
   * - ldapDisplayName: allowedChildClassesEffective
   * - attributeSyntax: 2.5.5.2
   * - attributeID: 1.2.840.113556.1.4.912
   */
  allowedChildClassesEffective = "allowedChildClassesEffective",
  /**
   * - Admin DisplayName: Allowed-Child-Classes
   * - Description: Allowed-Child-Classes
   * - ldapDisplayName: allowedChildClasses
   * - attributeSyntax: 2.5.5.2
   * - attributeID: 1.2.840.113556.1.4.911
   */
  allowedChildClasses = "allowedChildClasses",
  /**
   * - Admin DisplayName: Allowed-Attributes-Effective
   * - Description: Allowed-Attributes-Effective
   * - ldapDisplayName: allowedAttributesEffective
   * - attributeSyntax: 2.5.5.2
   * - attributeID: 1.2.840.113556.1.4.914
   */
  allowedAttributesEffective = "allowedAttributesEffective",
  /**
   * - Admin DisplayName: Allowed-Attributes
   * - Description: Allowed-Attributes
   * - ldapDisplayName: allowedAttributes
   * - attributeSyntax: 2.5.5.2
   * - attributeID: 1.2.840.113556.1.4.913
   */
  allowedAttributes = "allowedAttributes",
  /**
   * - Admin DisplayName: Admin-Display-Name
   * - Description: Admin-Display-Name
   * - ldapDisplayName: adminDisplayName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.194
   */
  adminDisplayName = "adminDisplayName",
  /**
   * - Admin DisplayName: Admin-Description
   * - Description: Admin-Description
   * - ldapDisplayName: adminDescription
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.226
   */
  adminDescription = "adminDescription",
  /**
   * - Admin DisplayName: attributeCertificateAttribute
   * - Description: A digitally signed or certified identity and set of attributes. Used to bind authorization information to an identity. X.509
   * - ldapDisplayName: attributeCertificateAttribute
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.5.4.58
   */
  attributeCertificateAttribute = "attributeCertificateAttribute",
  /**
   * - Admin DisplayName: User-Password
   * - Description: User-Password
   * - ldapDisplayName: userPassword
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.5.4.35
   */
  userPassword = "userPassword",
  /**
   * - Admin DisplayName: Telephone-Number
   * - Description: Telephone-Number
   * - ldapDisplayName: telephoneNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.20
   */
  telephoneNumber = "telephoneNumber",
  /**
   * - Admin DisplayName: Surname
   * - Description: Surname
   * - ldapDisplayName: sn
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.4
   */
  sn = "sn",
  /**
   * - Admin DisplayName: Serial-Number
   * - Description: Serial-Number
   * - ldapDisplayName: serialNumber
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 2.5.4.5
   */
  serialNumber = "serialNumber",
  /**
   * - Admin DisplayName: See-Also
   * - Description: See-Also
   * - ldapDisplayName: seeAlso
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 2.5.4.34
   */
  seeAlso = "seeAlso",
  /**
   * - Admin DisplayName: ms-Exch-User-Culture
   * - Description: ms-Exch-User-Culture
   * - ldapDisplayName: msExchUserCulture
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50773
   */
  msExchUserCulture = "msExchUserCulture",
  /**
   * - Admin DisplayName: ms-DS-Phonetic-Last-Name
   * - Description: Contains the phonetic last name of the person.
   * - ldapDisplayName: msDS-PhoneticLastName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1943
   */
  msDsPhoneticLastName = "msDS-PhoneticLastName",
  /**
   * - Admin DisplayName: ms-DS-Phonetic-First-Name
   * - Description: Contains the phonetic given name or first name of the person.
   * - ldapDisplayName: msDS-PhoneticFirstName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1942
   */
  msDsPhoneticFirstName = "msDS-PhoneticFirstName",
  /**
   * - Admin DisplayName: ms-DS-Phonetic-Department
   * - Description: Contains the phonetic department name where the person works.
   * - ldapDisplayName: msDS-PhoneticDepartment
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1944
   */
  msDsPhoneticDepartment = "msDS-PhoneticDepartment",
  /**
   * - Admin DisplayName: ms-DS-Phonetic-Company-Name
   * - Description: Contains the phonetic company name where the person works.
   * - ldapDisplayName: msDS-PhoneticCompanyName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1945
   */
  msDsPhoneticCompanyName = "msDS-PhoneticCompanyName",
  /**
   * - Admin DisplayName: ms-DS-Phonetic-Display-Name
   * - Description: The phonetic display name of an object.  In the absence of a phonetic display name the existing display name is used.
   * - ldapDisplayName: msDS-PhoneticDisplayName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1946
   */
  msDsPhoneticDisplayName = "msDS-PhoneticDisplayName",
  /**
   * - Admin DisplayName: ms-DS-HAB-Seniority-Index
   * - Description: Contains the seniority index as applied by the organization where the person works.
   * - ldapDisplayName: msDS-HABSeniorityIndex
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1997
   */
  msDsHabSeniorityIndex = "msDS-HABSeniorityIndex",
  /**
   * - Admin DisplayName: Employee-Number
   * - Description: Employee-Number
   * - ldapDisplayName: employeeNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.610
   */
  employeeNumber = "employeeNumber",
  /**
   * - Admin DisplayName: Employee-Type
   * - Description: Employee-Type
   * - ldapDisplayName: employeeType
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.613
   */
  employeeType = "employeeType",
  /**
   * - Admin DisplayName: ms-Exch-Business-Roles
   * - Description: ms-Exch-Business-Roles
   * - ldapDisplayName: businessRoles
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.105
   */
  businessRoles = "businessRoles",
  /**
   * - Admin DisplayName: ms-Exch-Telephone-Assistant
   * - Description: ms-Exch-Telephone-Assistant
   * - ldapDisplayName: telephoneAssistant
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.79
   */
  telephoneAssistant = "telephoneAssistant",
  /**
   * - Admin DisplayName: ms-Exch-Telephone-Personal-Pager
   * - Description: ms-Exch-Telephone-Personal-Pager
   * - ldapDisplayName: personalPager
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.612
   */
  personalPager = "personalPager",
  /**
   * - Admin DisplayName: houseIdentifier
   * - Description: The houseIdentifier attribute type specifies a linguistic construct used to identify a particular building, for example a house number or house name relative to a street, avenue, town or city, etc.
   * - ldapDisplayName: houseIdentifier
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.51
   */
  houseIdentifier = "houseIdentifier",
  /**
   * - Admin DisplayName: ms-Exch-House-Identifier
   * - Description: ms-Exch-House-Identifier
   * - ldapDisplayName: msExchHouseIdentifier
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.596
   */
  msExchHouseIdentifier = "msExchHouseIdentifier",
  /**
   * - Admin DisplayName: Address-Home
   * - Description: Address-Home
   * - ldapDisplayName: homePostalAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.617
   */
  homePostalAddress = "homePostalAddress",
  /**
   * - Admin DisplayName: ms-DS-Allowed-To-Act-On-Behalf-Of-Other-Identity
   * - Description: This attribute is used for access checks to determine if a requestor has permission to act on the behalf of other identities to services running as this account.
   * - ldapDisplayName: msDS-AllowedToActOnBehalfOfOtherIdentity
   * - attributeSyntax: 2.5.5.15
   * - attributeID: 1.2.840.113556.1.4.2182
   */
  msDsAllowedToActOnBehalfOfOtherIdentity = "msDS-AllowedToActOnBehalfOfOtherIdentity",
  /**
   * - Admin DisplayName: X121-Address
   * - Description: X121-Address
   * - ldapDisplayName: x121Address
   * - attributeSyntax: 2.5.5.6
   * - attributeID: 2.5.4.24
   */
  x121Address = "x121Address",
  /**
   * - Admin DisplayName: User-Comment
   * - Description: User-Comment
   * - ldapDisplayName: comment
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.156
   */
  comment = "comment",
  /**
   * - Admin DisplayName: Title
   * - Description: Title
   * - ldapDisplayName: title
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.12
   */
  title = "title",
  /**
   * - Admin DisplayName: Text-Country
   * - Description: Text-Country
   * - ldapDisplayName: co
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.131
   */
  co = "co",
  /**
   * - Admin DisplayName: Telex-Primary
   * - Description: Telex-Primary
   * - ldapDisplayName: primaryTelexNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.648
   */
  primaryTelexNumber = "primaryTelexNumber",
  /**
   * - Admin DisplayName: Telex-Number
   * - Description: Telex-Number
   * - ldapDisplayName: telexNumber
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.5.4.21
   */
  telexNumber = "telexNumber",
  /**
   * - Admin DisplayName: Teletex-Terminal-Identifier
   * - Description: Teletex-Terminal-Identifier
   * - ldapDisplayName: teletexTerminalIdentifier
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.5.4.22
   */
  teletexTerminalIdentifier = "teletexTerminalIdentifier",
  /**
   * - Admin DisplayName: Street-Address
   * - Description: Street-Address
   * - ldapDisplayName: street
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.9
   */
  street = "street",
  /**
   * - Admin DisplayName: State-Or-Province-Name
   * - Description: State-Or-Province-Name
   * - ldapDisplayName: st
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.8
   */
  st = "st",
  /**
   * - Admin DisplayName: Registered-Address
   * - Description: Registered-Address
   * - ldapDisplayName: registeredAddress
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.5.4.26
   */
  registeredAddress = "registeredAddress",
  /**
   * - Admin DisplayName: Preferred-Delivery-Method
   * - Description: Preferred-Delivery-Method
   * - ldapDisplayName: preferredDeliveryMethod
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 2.5.4.28
   */
  preferredDeliveryMethod = "preferredDeliveryMethod",
  /**
   * - Admin DisplayName: Postal-Code
   * - Description: Postal-Code
   * - ldapDisplayName: postalCode
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.17
   */
  postalCode = "postalCode",
  /**
   * - Admin DisplayName: Postal-Address
   * - Description: Postal-Address
   * - ldapDisplayName: postalAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.16
   */
  postalAddress = "postalAddress",
  /**
   * - Admin DisplayName: Post-Office-Box
   * - Description: Post-Office-Box
   * - ldapDisplayName: postOfficeBox
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.18
   */
  postOfficeBox = "postOfficeBox",
  /**
   * - Admin DisplayName: Picture
   * - Description: Picture
   * - ldapDisplayName: thumbnailPhoto
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.16.840.1.113730.3.1.35
   */
  thumbnailPhoto = "thumbnailPhoto",
  /**
   * - Admin DisplayName: Physical-Delivery-Office-Name
   * - Description: Physical-Delivery-Office-Name
   * - ldapDisplayName: physicalDeliveryOfficeName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.19
   */
  physicalDeliveryOfficeName = "physicalDeliveryOfficeName",
  /**
   * - Admin DisplayName: Phone-Pager-Primary
   * - Description: Phone-Pager-Primary
   * - ldapDisplayName: pager
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 0.9.2342.19200300.100.1.42
   */
  pager = "pager",
  /**
   * - Admin DisplayName: Phone-Pager-Other
   * - Description: Phone-Pager-Other
   * - ldapDisplayName: otherPager
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.118
   */
  otherPager = "otherPager",
  /**
   * - Admin DisplayName: Phone-Office-Other
   * - Description: Phone-Office-Other
   * - ldapDisplayName: otherTelephone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.18
   */
  otherTelephone = "otherTelephone",
  /**
   * - Admin DisplayName: Phone-Mobile-Primary
   * - Description: Phone-Mobile-Primary
   * - ldapDisplayName: mobile
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 0.9.2342.19200300.100.1.41
   */
  mobile = "mobile",
  /**
   * - Admin DisplayName: Phone-Mobile-Other
   * - Description: Phone-Mobile-Other
   * - ldapDisplayName: otherMobile
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.647
   */
  otherMobile = "otherMobile",
  /**
   * - Admin DisplayName: Phone-ISDN-Primary
   * - Description: Phone-ISDN-Primary
   * - ldapDisplayName: primaryInternationalISDNNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.649
   */
  primaryInternationalIsdnNumber = "primaryInternationalISDNNumber",
  /**
   * - Admin DisplayName: Phone-Ip-Primary
   * - Description: Phone-Ip-Primary
   * - ldapDisplayName: ipPhone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.721
   */
  ipPhone = "ipPhone",
  /**
   * - Admin DisplayName: Phone-Ip-Other
   * - Description: Phone-Ip-Other
   * - ldapDisplayName: otherIpPhone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.722
   */
  otherIpPhone = "otherIpPhone",
  /**
   * - Admin DisplayName: Phone-Home-Other
   * - Description: Phone-Home-Other
   * - ldapDisplayName: otherHomePhone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.277
   */
  otherHomePhone = "otherHomePhone",
  /**
   * - Admin DisplayName: Phone-Home-Primary
   * - Description: Phone-Home-Primary
   * - ldapDisplayName: homePhone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 0.9.2342.19200300.100.1.20
   */
  homePhone = "homePhone",
  /**
   * - Admin DisplayName: Phone-Fax-Other
   * - Description: Phone-Fax-Other
   * - ldapDisplayName: otherFacsimileTelephoneNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.646
   */
  otherFacsimileTelephoneNumber = "otherFacsimileTelephoneNumber",
  /**
   * - Admin DisplayName: Personal-Title
   * - Description: Personal-Title
   * - ldapDisplayName: personalTitle
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.615
   */
  personalTitle = "personalTitle",
  /**
   * - Admin DisplayName: Other-Name
   * - Description: Other-Name
   * - ldapDisplayName: middleName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.16.840.1.113730.3.1.34
   */
  middleName = "middleName",
  /**
   * - Admin DisplayName: Other-Mailbox
   * - Description: Other-Mailbox
   * - ldapDisplayName: otherMailbox
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.651
   */
  otherMailbox = "otherMailbox",
  /**
   * - Admin DisplayName: Organizational-Unit-Name
   * - Description: Organizational-Unit-Name
   * - ldapDisplayName: ou
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.11
   */
  ou = "ou",
  /**
   * - Admin DisplayName: Organization-Name
   * - Description: Organization-Name
   * - ldapDisplayName: o
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.10
   */
  o = "o",
  /**
   * - Admin DisplayName: MHS-OR-Address
   * - Description: MHS-OR-Address
   * - ldapDisplayName: mhsORAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.650
   */
  mhsOrAddress = "mhsORAddress",
  /**
   * - Admin DisplayName: ms-DS-Allowed-To-Delegate-To
   * - Description: Allowed-To-Delegate-To contains a list of SPNs that are used for Constrained Delegation
   * - ldapDisplayName: msDS-AllowedToDelegateTo
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1787
   */
  msDsAllowedToDelegateTo = "msDS-AllowedToDelegateTo",
  /**
   * - Admin DisplayName: Manager
   * - Description: Manager
   * - ldapDisplayName: manager
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 0.9.2342.19200300.100.1.10
   */
  manager = "manager",
  /**
   * - Admin DisplayName: Logo
   * - Description: Logo
   * - ldapDisplayName: thumbnailLogo
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.16.840.1.113730.3.1.36
   */
  thumbnailLogo = "thumbnailLogo",
  /**
   * - Admin DisplayName: Locality-Name
   * - Description: Locality-Name
   * - ldapDisplayName: l
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.7
   */
  l = "l",
  /**
   * - Admin DisplayName: International-ISDN-Number
   * - Description: International-ISDN-Number
   * - ldapDisplayName: internationalISDNNumber
   * - attributeSyntax: 2.5.5.6
   * - attributeID: 2.5.4.25
   */
  internationalIsdnNumber = "internationalISDNNumber",
  /**
   * - Admin DisplayName: Initials
   * - Description: Initials
   * - ldapDisplayName: initials
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.43
   */
  initials = "initials",
  /**
   * - Admin DisplayName: Given-Name
   * - Description: Given-Name
   * - ldapDisplayName: givenName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.42
   */
  givenName = "givenName",
  /**
   * - Admin DisplayName: Generation-Qualifier
   * - Description: Generation-Qualifier
   * - ldapDisplayName: generationQualifier
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.44
   */
  generationQualifier = "generationQualifier",
  /**
   * - Admin DisplayName: Facsimile-Telephone-Number
   * - Description: Facsimile-Telephone-Number
   * - ldapDisplayName: facsimileTelephoneNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.23
   */
  facsimileTelephoneNumber = "facsimileTelephoneNumber",
  /**
   * - Admin DisplayName: Employee-ID
   * - Description: Employee-ID
   * - ldapDisplayName: employeeID
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.35
   */
  employeeId = "employeeID",
  /**
   * - Admin DisplayName: E-mail-Addresses
   * - Description: E-mail-Addresses
   * - ldapDisplayName: mail
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 0.9.2342.19200300.100.1.3
   */
  mail = "mail",
  /**
   * - Admin DisplayName: Division
   * - Description: Division
   * - ldapDisplayName: division
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.261
   */
  division = "division",
  /**
   * - Admin DisplayName: Destination-Indicator
   * - Description: Destination-Indicator
   * - ldapDisplayName: destinationIndicator
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 2.5.4.27
   */
  destinationIndicator = "destinationIndicator",
  /**
   * - Admin DisplayName: Department
   * - Description: Department
   * - ldapDisplayName: department
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.141
   */
  department = "department",
  /**
   * - Admin DisplayName: Country-Name
   * - Description: Country-Name
   * - ldapDisplayName: c
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.6
   */
  c = "c",
  /**
   * - Admin DisplayName: Country-Code
   * - Description: Country-Code
   * - ldapDisplayName: countryCode
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.25
   */
  countryCode = "countryCode",
  /**
   * - Admin DisplayName: Company
   * - Description: Company
   * - ldapDisplayName: company
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.146
   */
  company = "company",
  /**
   * - Admin DisplayName: Assistant
   * - Description: Assistant
   * - ldapDisplayName: assistant
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.652
   */
  assistant = "assistant",
  /**
   * - Admin DisplayName: Address
   * - Description: Address
   * - ldapDisplayName: streetAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.256
   */
  streetAddress = "streetAddress",
  /**
   * - Admin DisplayName: ms-Exch-UG-Event-Subscription-Link
   * - Description: ms-Exch-UG-Event-Subscription-Link
   * - ldapDisplayName: msExchUGEventSubscriptionLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52159
   */
  msExchUgEventSubscriptionLink = "msExchUGEventSubscriptionLink",
  /**
   * - Admin DisplayName: ms-Exch-Immutable-Sid
   * - Description: ms-Exch-Immutable-Sid
   * - ldapDisplayName: msExchImmutableSid
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.7000.102.52161
   */
  msExchImmutableSid = "msExchImmutableSid",
  /**
   * - Admin DisplayName: ms-Exch-Administrative-Unit-Link
   * - Description: ms-Exch-Administrative-Unit-Link
   * - ldapDisplayName: msExchAdministrativeUnitLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52157
   */
  msExchAdministrativeUnitLink = "msExchAdministrativeUnitLink",
  /**
   * - Admin DisplayName: ms-Exch-Auth-Policy-Link
   * - Description: ms-Exch-Auth-Policy-Link
   * - ldapDisplayName: msExchAuthPolicyLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52155
   */
  msExchAuthPolicyLink = "msExchAuthPolicyLink",
  /**
   * - Admin DisplayName: ms-Exch-Multi-Mailbox-Databases-Link
   * - Description: ms-Exch-Multi-Mailbox-Databases-Link
   * - ldapDisplayName: msExchMultiMailboxDatabasesLink
   * - attributeSyntax: 2.5.5.14
   * - attributeID: 1.2.840.113556.1.4.7000.102.52148
   */
  msExchMultiMailboxDatabasesLink = "msExchMultiMailboxDatabasesLink",
  /**
   * - Admin DisplayName: ms-Exch-Group-Security-Flags
   * - Description: ms-Exch-Group-Security-Flags
   * - ldapDisplayName: msExchGroupSecurityFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.52147
   */
  msExchGroupSecurityFlags = "msExchGroupSecurityFlags",
  /**
   * - Admin DisplayName: ms-DS-External-Directory-Object-Id
   * - Description: ms-DS-External-Directory-Object-Id
   * - ldapDisplayName: msDS-ExternalDirectoryObjectId
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2310
   */
  msDsExternalDirectoryObjectId = "msDS-ExternalDirectoryObjectId",
  /**
   * - Admin DisplayName: ms-Exch-Sts-Refresh-Tokens-Valid-From
   * - Description: ms-Exch-Sts-Refresh-Tokens-Valid-From
   * - ldapDisplayName: msExchStsRefreshTokensValidFrom
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.52143
   */
  msExchStsRefreshTokensValidFrom = "msExchStsRefreshTokensValidFrom",
  /**
   * - Admin DisplayName: ms-Exch-Aux-Mailbox-Parent-Object-Id-Link
   * - Description: ms-Exch-Aux-Mailbox-Parent-Object-Id-Link
   * - ldapDisplayName: msExchAuxMailboxParentObjectIdLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52141
   */
  msExchAuxMailboxParentObjectIdLink = "msExchAuxMailboxParentObjectIdLink",
  /**
   * - Admin DisplayName: ms-Exch-UG-Member-Link
   * - Description: ms-Exch-UG-Member-Link
   * - ldapDisplayName: msExchUGMemberLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52137
   */
  msExchUgMemberLink = "msExchUGMemberLink",
  /**
   * - Admin DisplayName: ms-Exch-Organization-Upgrade-Status
   * - Description: ms-Exch-Organization-Upgrade-Status
   * - ldapDisplayName: msExchOrganizationUpgradeStatus
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.52097
   */
  msExchOrganizationUpgradeStatus = "msExchOrganizationUpgradeStatus",
  /**
   * - Admin DisplayName: ms-Exch-Organization-Upgrade-Request
   * - Description: ms-Exch-Organization-Upgrade-Request
   * - ldapDisplayName: msExchOrganizationUpgradeRequest
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.52096
   */
  msExchOrganizationUpgradeRequest = "msExchOrganizationUpgradeRequest",
  /**
   * - Admin DisplayName: ms-Exch-Configuration-XML
   * - Description: ms-Exch-Configuration-XML
   * - ldapDisplayName: msExchConfigurationXML
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52076
   */
  msExchConfigurationXml = "msExchConfigurationXML",
  /**
   * - Admin DisplayName: ms-Exch-Previous-Recipient-Type-Details
   * - Description: ms-Exch-Previous-Recipient-Type-Details
   * - ldapDisplayName: msExchPreviousRecipientTypeDetails
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.7000.102.52107
   */
  msExchPreviousRecipientTypeDetails = "msExchPreviousRecipientTypeDetails",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Release
   * - Description: ms-Exch-Mailbox-Release
   * - ldapDisplayName: msExchMailboxRelease
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52073
   */
  msExchMailboxRelease = "msExchMailboxRelease",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Release
   * - Description: ms-Exch-Archive-Release
   * - ldapDisplayName: msExchArchiveRelease
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52074
   */
  msExchArchiveRelease = "msExchArchiveRelease",
  /**
   * - Admin DisplayName: ms-Exch-User-Hold-Policies
   * - Description: ms-Exch-User-Hold-Policies
   * - ldapDisplayName: msExchUserHoldPolicies
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52071
   */
  msExchUserHoldPolicies = "msExchUserHoldPolicies",
  /**
   * - Admin DisplayName: ms-Exch-Public-Folder-Smtp-Address
   * - Description: ms-Exch-Public-Folder-Smtp-Address
   * - ldapDisplayName: msExchPublicFolderSmtpAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52036
   */
  msExchPublicFolderSmtpAddress = "msExchPublicFolderSmtpAddress",
  /**
   * - Admin DisplayName: ms-Exch-Public-Folder-Mailbox
   * - Description: ms-Exch-Public-Folder-Mailbox
   * - ldapDisplayName: msExchPublicFolderMailbox
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52034
   */
  msExchPublicFolderMailbox = "msExchPublicFolderMailbox",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-When-Soft-Deleted-Time
   * - Description: ms-Exch-Shadow-When-Soft-Deleted-Time
   * - ldapDisplayName: msExchShadowWhenSoftDeletedTime
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51996
   */
  msExchShadowWhenSoftDeletedTime = "msExchShadowWhenSoftDeletedTime",
  /**
   * - Admin DisplayName: ms-Exch-Group-Member-Count
   * - Description: ms-Exch-Group-Member-Count
   * - ldapDisplayName: msExchGroupMemberCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51993
   */
  msExchGroupMemberCount = "msExchGroupMemberCount",
  /**
   * - Admin DisplayName: ms-Exch-Group-External-Member-Count
   * - Description: ms-Exch-Group-External-Member-Count
   * - ldapDisplayName: msExchGroupExternalMemberCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51994
   */
  msExchGroupExternalMemberCount = "msExchGroupExternalMemberCount",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Target-MDB-Link-SL
   * - Description: ms-Exch-Mailbox-Move-Target-MDB-Link-SL
   * - ldapDisplayName: msExchMailboxMoveTargetMDBLinkSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51952
   */
  msExchMailboxMoveTargetMdbLinkSl = "msExchMailboxMoveTargetMDBLinkSL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Target-Archive-MDB-Link-SL
   * - Description: ms-Exch-Mailbox-Move-Target-Archive-MDB-Link-SL
   * - ldapDisplayName: msExchMailboxMoveTargetArchiveMDBLinkSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51936
   */
  msExchMailboxMoveTargetArchiveMdbLinkSl = "msExchMailboxMoveTargetArchiveMDBLinkSL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Source-MDB-Link-SL
   * - Description: ms-Exch-Mailbox-Move-Source-MDB-Link-SL
   * - ldapDisplayName: msExchMailboxMoveSourceMDBLinkSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51934
   */
  msExchMailboxMoveSourceMdbLinkSl = "msExchMailboxMoveSourceMDBLinkSL",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Source-Archive-MDB-Link-SL
   * - Description: ms-Exch-Mailbox-Move-Source-Archive-MDB-Link-SL
   * - ldapDisplayName: msExchMailboxMoveSourceArchiveMDBLinkSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51933
   */
  msExchMailboxMoveSourceArchiveMdbLinkSl = "msExchMailboxMoveSourceArchiveMDBLinkSL",
  /**
   * - Admin DisplayName: ms-Exch-Home-MTA-SL
   * - Description: ms-Exch-Home-MTA-SL
   * - ldapDisplayName: msExchHomeMTASL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51940
   */
  msExchHomeMtasl = "msExchHomeMTASL",
  /**
   * - Admin DisplayName: ms-Exch-When-Soft-Deleted-Time
   * - Description: ms-Exch-When-Soft-Deleted-Time
   * - ldapDisplayName: msExchWhenSoftDeletedTime
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51860
   */
  msExchWhenSoftDeletedTime = "msExchWhenSoftDeletedTime",
  /**
   * - Admin DisplayName: ms-Exch-Recipient-SoftDeleted-Status
   * - Description: ms-Exch-Recipient-SoftDeleted-Status
   * - ldapDisplayName: msExchRecipientSoftDeletedStatus
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51859
   */
  msExchRecipientSoftDeletedStatus = "msExchRecipientSoftDeletedStatus",
  /**
   * - Admin DisplayName: ms-Exch-RoleGroup-Type
   * - Description: ms-Exch-RoleGroup-Type
   * - ldapDisplayName: msExchRoleGroupType
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51775
   */
  msExchRoleGroupType = "msExchRoleGroupType",
  /**
   * - Admin DisplayName: ms-Exch-Localization-Flags
   * - Description: ms-Exch-Localization-Flags
   * - ldapDisplayName: msExchLocalizationFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51774
   */
  msExchLocalizationFlags = "msExchLocalizationFlags",
  /**
   * - Admin DisplayName: ms-DS-GeoCoordinates-Longitude
   * - Description: ms-DS-GeoCoordinates-Longitude
   * - ldapDisplayName: msDS-GeoCoordinatesLongitude
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.2185
   */
  msDsGeoCoordinatesLongitude = "msDS-GeoCoordinatesLongitude",
  /**
   * - Admin DisplayName: ms-DS-GeoCoordinates-Latitude
   * - Description: ms-DS-GeoCoordinates-Latitude
   * - ldapDisplayName: msDS-GeoCoordinatesLatitude
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.2184
   */
  msDsGeoCoordinatesLatitude = "msDS-GeoCoordinatesLatitude",
  /**
   * - Admin DisplayName: ms-DS-GeoCoordinates-Altitude
   * - Description: ms-DS-GeoCoordinates-Altitude
   * - ldapDisplayName: msDS-GeoCoordinatesAltitude
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.2183
   */
  msDsGeoCoordinatesAltitude = "msDS-GeoCoordinatesAltitude",
  /**
   * - Admin DisplayName: ms-Exch-Ews-Application-Access-Policy
   * - Description: ms-Exch-Ews-Application-Access-Policy
   * - ldapDisplayName: msExchEwsApplicationAccessPolicy
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51577
   */
  msExchEwsApplicationAccessPolicy = "msExchEwsApplicationAccessPolicy",
  /**
   * - Admin DisplayName: ms-Exch-Ews-Enabled
   * - Description: ms-Exch-Ews-Enabled
   * - ldapDisplayName: msExchEwsEnabled
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51571
   */
  msExchEwsEnabled = "msExchEwsEnabled",
  /**
   * - Admin DisplayName: ms-Exch-Ews-Exceptions
   * - Description: ms-Exch-Ews-Exceptions
   * - ldapDisplayName: msExchEwsExceptions
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51573
   */
  msExchEwsExceptions = "msExchEwsExceptions",
  /**
   * - Admin DisplayName: ms-Exch-Ews-Well-Known-Application-Policies
   * - Description: ms-Exch-Ews-Well-Known-Application-Policies
   * - ldapDisplayName: msExchEwsWellKnownApplicationPolicies
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51576
   */
  msExchEwsWellKnownApplicationPolicies = "msExchEwsWellKnownApplicationPolicies",
  /**
   * - Admin DisplayName: ms-Exch-Capability-Identifiers
   * - Description: ms-Exch-Capability-Identifiers
   * - ldapDisplayName: msExchCapabilityIdentifiers
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51581
   */
  msExchCapabilityIdentifiers = "msExchCapabilityIdentifiers",
  /**
   * - Admin DisplayName: ms-Exch-Remote-Recipient-Type
   * - Description: ms-Exch-Remote-Recipient-Type
   * - ldapDisplayName: msExchRemoteRecipientType
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.7000.102.51611
   */
  msExchRemoteRecipientType = "msExchRemoteRecipientType",
  /**
   * - Admin DisplayName: ms-Exch-UC-Voice-Mail-Settings
   * - Description: ms-Exch-UC-Voice-Mail-Settings
   * - ldapDisplayName: msExchUCVoiceMailSettings
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51612
   */
  msExchUcVoiceMailSettings = "msExchUCVoiceMailSettings",
  /**
   * - Admin DisplayName: ms-Exch-When-Mailbox-Created
   * - Description: ms-Exch-When-Mailbox-Created
   * - ldapDisplayName: msExchWhenMailboxCreated
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51580
   */
  msExchWhenMailboxCreated = "msExchWhenMailboxCreated",
  /**
   * - Admin DisplayName: ms-Exch-Generic-Forwarding-Address
   * - Description: ms-Exch-Generic-Forwarding-Address
   * - ldapDisplayName: msExchGenericForwardingAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51620
   */
  msExchGenericForwardingAddress = "msExchGenericForwardingAddress",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Folder-Set-2
   * - Description: ms-Exch-Mailbox-Folder-Set-2
   * - ldapDisplayName: msExchMailboxFolderSet2
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51568
   */
  msExchMailboxFolderSet2 = "msExchMailboxFolderSet2",
  /**
   * - Admin DisplayName: ms-Exch-Partner-Group-ID
   * - Description: ms-Exch-Partner-Group-ID
   * - ldapDisplayName: msExchPartnerGroupID
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51644
   */
  msExchPartnerGroupId = "msExchPartnerGroupID",
  /**
   * - Admin DisplayName: ms-Exch-Sharing-Anonymous-Identities
   * - Description: ms-Exch-Sharing-Anonymous-Identities
   * - ldapDisplayName: msExchSharingAnonymousIdentities
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51624
   */
  msExchSharingAnonymousIdentities = "msExchSharingAnonymousIdentities",
  /**
   * - Admin DisplayName: ms-Exch-Audit-Admin
   * - Description: ms-Exch-Audit-Admin
   * - ldapDisplayName: msExchAuditAdmin
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51673
   */
  msExchAuditAdmin = "msExchAuditAdmin",
  /**
   * - Admin DisplayName: ms-Exch-Audit-Delegate
   * - Description: ms-Exch-Audit-Delegate
   * - ldapDisplayName: msExchAuditDelegate
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51674
   */
  msExchAuditDelegate = "msExchAuditDelegate",
  /**
   * - Admin DisplayName: ms-Exch-Audit-Delegate-Admin
   * - Description: ms-Exch-Audit-Delegate-Admin
   * - ldapDisplayName: msExchAuditDelegateAdmin
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51675
   */
  msExchAuditDelegateAdmin = "msExchAuditDelegateAdmin",
  /**
   * - Admin DisplayName: ms-Exch-Audit-Owner
   * - Description: ms-Exch-Audit-Owner
   * - ldapDisplayName: msExchAuditOwner
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51676
   */
  msExchAuditOwner = "msExchAuditOwner",
  /**
   * - Admin DisplayName: ms-Exch-Bypass-Audit
   * - Description: ms-Exch-Bypass-Audit
   * - ldapDisplayName: msExchBypassAudit
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.51678
   */
  msExchBypassAudit = "msExchBypassAudit",
  /**
   * - Admin DisplayName: ms-Exch-Interrupt-User-On-Audit-Failure
   * - Description: ms-Exch-Interrupt-User-On-Audit-Failure
   * - ldapDisplayName: msExchInterruptUserOnAuditFailure
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.51677
   */
  msExchInterruptUserOnAuditFailure = "msExchInterruptUserOnAuditFailure",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Audit-Enable
   * - Description: ms-Exch-Mailbox-Audit-Enable
   * - ldapDisplayName: msExchMailboxAuditEnable
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.51671
   */
  msExchMailboxAuditEnable = "msExchMailboxAuditEnable",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Audit-Log-Age-Limit
   * - Description: ms-Exch-Mailbox-Audit-Log-Age-Limit
   * - ldapDisplayName: msExchMailboxAuditLogAgeLimit
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51672
   */
  msExchMailboxAuditLogAgeLimit = "msExchMailboxAuditLogAgeLimit",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Source-Archive-MDB-Link
   * - Description: ms-Exch-Mailbox-Move-Source-Archive-MDB-Link
   * - ldapDisplayName: msExchMailboxMoveSourceArchiveMDBLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51684
   */
  msExchMailboxMoveSourceArchiveMdbLink = "msExchMailboxMoveSourceArchiveMDBLink",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Target-Archive-MDB-Link
   * - Description: ms-Exch-Mailbox-Move-Target-Archive-MDB-Link
   * - ldapDisplayName: msExchMailboxMoveTargetArchiveMDBLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51685
   */
  msExchMailboxMoveTargetArchiveMdbLink = "msExchMailboxMoveTargetArchiveMDBLink",
  /**
   * - Admin DisplayName: ms-Exch-Address-Book-Flags
   * - Description: ms-Exch-Address-Book-Flags
   * - ldapDisplayName: msExchAddressBookFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51733
   */
  msExchAddressBookFlags = "msExchAddressBookFlags",
  /**
   * - Admin DisplayName: ms-Exch-Dirsync-Source-Object-Class
   * - Description: ms-Exch-Dirsync-Source-Object-Class
   * - ldapDisplayName: msExchDirsyncSourceObjectClass
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51746
   */
  msExchDirsyncSourceObjectClass = "msExchDirsyncSourceObjectClass",
  /**
   * - Admin DisplayName: ms-Exch-Litigation-Hold-Date
   * - Description: ms-Exch-Litigation-Hold-Date
   * - ldapDisplayName: msExchLitigationHoldDate
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51734
   */
  msExchLitigationHoldDate = "msExchLitigationHoldDate",
  /**
   * - Admin DisplayName: ms-Exch-Litigation-Hold-Owner
   * - Description: ms-Exch-Litigation-Hold-Owner
   * - ldapDisplayName: msExchLitigationHoldOwner
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51735
   */
  msExchLitigationHoldOwner = "msExchLitigationHoldOwner",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Audit-Last-Admin-Access
   * - Description: ms-Exch-Mailbox-Audit-Last-Admin-Access
   * - ldapDisplayName: msExchMailboxAuditLastAdminAccess
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51738
   */
  msExchMailboxAuditLastAdminAccess = "msExchMailboxAuditLastAdminAccess",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Audit-Last-Delegate-Access
   * - Description: ms-Exch-Mailbox-Audit-Last-Delegate-Access
   * - ldapDisplayName: msExchMailboxAuditLastDelegateAccess
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51739
   */
  msExchMailboxAuditLastDelegateAccess = "msExchMailboxAuditLastDelegateAccess",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Audit-Last-External-Access
   * - Description: ms-Exch-Mailbox-Audit-Last-External-Access
   * - ldapDisplayName: msExchMailboxAuditLastExternalAccess
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51737
   */
  msExchMailboxAuditLastExternalAccess = "msExchMailboxAuditLastExternalAccess",
  /**
   * - Admin DisplayName: ms-Exch-Calculated-Target-Address
   * - Description: ms-Exch-Calculated-Target-Address
   * - ldapDisplayName: msExchCalculatedTargetAddress
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.51754
   */
  msExchCalculatedTargetAddress = "msExchCalculatedTargetAddress",
  /**
   * - Admin DisplayName: ms-Exch-Usage-Location
   * - Description: ms-Exch-Usage-Location
   * - ldapDisplayName: msExchUsageLocation
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51767
   */
  msExchUsageLocation = "msExchUsageLocation",
  /**
   * - Admin DisplayName: ms-Exch-UM-Calling-Line-IDs
   * - Description: ms-Exch-UM-Calling-Line-IDs
   * - ldapDisplayName: msExchUMCallingLineIDs
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51145
   */
  msExchUmCallingLineIDs = "msExchUMCallingLineIDs",
  /**
   * - Admin DisplayName: ms-Exch-Aggregation-Subscription-Credential
   * - Description: ms-Exch-Aggregation-Subscription-Credential
   * - ldapDisplayName: msExchAggregationSubscriptionCredential
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51149
   */
  msExchAggregationSubscriptionCredential = "msExchAggregationSubscriptionCredential",
  /**
   * - Admin DisplayName: ms-Exch-Bypass-Moderation-BL
   * - Description: ms-Exch-Bypass-Moderation-BL
   * - ldapDisplayName: msExchBypassModerationBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51152
   */
  msExchBypassModerationBl = "msExchBypassModerationBL",
  /**
   * - Admin DisplayName: ms-Exch-Bypass-Moderation-From-DL-Members-BL
   * - Description: ms-Exch-Bypass-Moderation-From-DL-Members-BL
   * - ldapDisplayName: msExchBypassModerationFromDLMembersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51151
   */
  msExchBypassModerationFromDlMembersBl = "msExchBypassModerationFromDLMembersBL",
  /**
   * - Admin DisplayName: ms-Exch-Bypass-Moderation-From-DL-Members-Link
   * - Description: ms-Exch-Bypass-Moderation-From-DL-Members-Link
   * - ldapDisplayName: msExchBypassModerationFromDLMembersLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51141
   */
  msExchBypassModerationFromDlMembersLink = "msExchBypassModerationFromDLMembersLink",
  /**
   * - Admin DisplayName: ms-Exch-Bypass-Moderation-Link
   * - Description: ms-Exch-Bypass-Moderation-Link
   * - ldapDisplayName: msExchBypassModerationLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51140
   */
  msExchBypassModerationLink = "msExchBypassModerationLink",
  /**
   * - Admin DisplayName: ms-Exch-Parent-Plan-Link
   * - Description: ms-Exch-Parent-Plan-Link
   * - ldapDisplayName: msExchParentPlanLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51142
   */
  msExchParentPlanLink = "msExchParentPlanLink",
  /**
   * - Admin DisplayName: ms-Exch-Provisioning-Flags
   * - Description: ms-Exch-Provisioning-Flags
   * - ldapDisplayName: msExchProvisioningFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51143
   */
  msExchProvisioningFlags = "msExchProvisioningFlags",
  /**
   * - Admin DisplayName: ms-Exch-Send-As-Addresses
   * - Description: ms-Exch-Send-As-Addresses
   * - ldapDisplayName: msExchSendAsAddresses
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51150
   */
  msExchSendAsAddresses = "msExchSendAsAddresses",
  /**
   * - Admin DisplayName: ms-Exch-Throttling-Policy-DN
   * - Description: ms-Exch-Throttling-Policy-DN
   * - ldapDisplayName: msExchThrottlingPolicyDN
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51096
   */
  msExchThrottlingPolicyDn = "msExchThrottlingPolicyDN",
  /**
   * - Admin DisplayName: ms-Exch-Retention-Comment
   * - Description: ms-Exch-Retention-Comment
   * - ldapDisplayName: msExchRetentionComment
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51240
   */
  msExchRetentionComment = "msExchRetentionComment",
  /**
   * - Admin DisplayName: ms-Exch-Retention-URL
   * - Description: ms-Exch-Retention-URL
   * - ldapDisplayName: msExchRetentionURL
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51242
   */
  msExchRetentionUrl = "msExchRetentionURL",
  /**
   * - Admin DisplayName: ms-Exch-Sharing-Policy-Link
   * - Description: ms-Exch-Sharing-Policy-Link
   * - ldapDisplayName: msExchSharingPolicyLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51266
   */
  msExchSharingPolicyLink = "msExchSharingPolicyLink",
  /**
   * - Admin DisplayName: ms-Exch-Supervision-DL-Link
   * - Description: ms-Exch-Supervision-DL-Link
   * - ldapDisplayName: msExchSupervisionDLLink
   * - attributeSyntax: 2.5.5.14
   * - attributeID: 1.2.840.113556.1.4.7000.102.51366
   */
  msExchSupervisionDlLink = "msExchSupervisionDLLink",
  /**
   * - Admin DisplayName: ms-Exch-Supervision-One-Off-Link
   * - Description: ms-Exch-Supervision-One-Off-Link
   * - ldapDisplayName: msExchSupervisionOneOffLink
   * - attributeSyntax: 2.5.5.14
   * - attributeID: 1.2.840.113556.1.4.7000.102.51367
   */
  msExchSupervisionOneOffLink = "msExchSupervisionOneOffLink",
  /**
   * - Admin DisplayName: ms-Exch-Supervision-User-Link
   * - Description: ms-Exch-Supervision-User-Link
   * - ldapDisplayName: msExchSupervisionUserLink
   * - attributeSyntax: 2.5.5.14
   * - attributeID: 1.2.840.113556.1.4.7000.102.51365
   */
  msExchSupervisionUserLink = "msExchSupervisionUserLink",
  /**
   * - Admin DisplayName: ms-Exch-Calendar-Repair-Disabled
   * - Description: ms-Exch-Calendar-Repair-Disabled
   * - ldapDisplayName: msExchCalendarRepairDisabled
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.51336
   */
  msExchCalendarRepairDisabled = "msExchCalendarRepairDisabled",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Flags
   * - Description: ms-Exch-Mailbox-Move-Flags
   * - ldapDisplayName: msExchMailboxMoveFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51400
   */
  msExchMailboxMoveFlags = "msExchMailboxMoveFlags",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Remote-Host-Name
   * - Description: ms-Exch-Mailbox-Move-Remote-Host-Name
   * - ldapDisplayName: msExchMailboxMoveRemoteHostName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51402
   */
  msExchMailboxMoveRemoteHostName = "msExchMailboxMoveRemoteHostName",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Status
   * - Description: ms-Exch-Mailbox-Move-Status
   * - ldapDisplayName: msExchMailboxMoveStatus
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51401
   */
  msExchMailboxMoveStatus = "msExchMailboxMoveStatus",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Target-MDB-Link
   * - Description: ms-Exch-Mailbox-Move-Target-MDB-Link
   * - ldapDisplayName: msExchMailboxMoveTargetMDBLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51398
   */
  msExchMailboxMoveTargetMdbLink = "msExchMailboxMoveTargetMDBLink",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Plan-Type
   * - Description: ms-Exch-Mailbox-Plan-Type
   * - ldapDisplayName: msExchMailboxPlanType
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51405
   */
  msExchMailboxPlanType = "msExchMailboxPlanType",
  /**
   * - Admin DisplayName: ms-Exch-Sync-Accounts-Policy-DN
   * - Description: ms-Exch-Sync-Accounts-Policy-DN
   * - ldapDisplayName: msExchSyncAccountsPolicyDN
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51394
   */
  msExchSyncAccountsPolicyDn = "msExchSyncAccountsPolicyDN",
  /**
   * - Admin DisplayName: ms-Exch-Text-Messaging-State
   * - Description: ms-Exch-Text-Messaging-State
   * - ldapDisplayName: msExchTextMessagingState
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51383
   */
  msExchTextMessagingState = "msExchTextMessagingState",
  /**
   * - Admin DisplayName: ms-Exch-UM-Addresses
   * - Description: ms-Exch-UM-Addresses
   * - ldapDisplayName: msExchUMAddresses
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51344
   */
  msExchUmAddresses = "msExchUMAddresses",
  /**
   * - Admin DisplayName: ms-Exch-Dirsync-ID
   * - Description: ms-Exch-Dirsync-ID
   * - ldapDisplayName: msExchDirsyncID
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51414
   */
  msExchDirsyncId = "msExchDirsyncID",
  /**
   * - Admin DisplayName: ms-Exch-RBAC-Policy-Link
   * - Description: ms-Exch-RBAC-Policy-Link
   * - ldapDisplayName: msExchRBACPolicyLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51429
   */
  msExchRbacPolicyLink = "msExchRBACPolicyLink",
  /**
   * - Admin DisplayName: ms-Exch-Edge-Sync-Retry-Count
   * - Description: ms-Exch-Edge-Sync-Retry-Count
   * - ldapDisplayName: msExchEdgeSyncRetryCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51506
   */
  msExchEdgeSyncRetryCount = "msExchEdgeSyncRetryCount",
  /**
   * - Admin DisplayName: ms-Exch-Foreign-Group-SID
   * - Description: ms-Exch-Foreign-Group-SID
   * - ldapDisplayName: msExchForeignGroupSID
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.7000.102.51561
   */
  msExchForeignGroupSid = "msExchForeignGroupSID",
  /**
   * - Admin DisplayName: ms-Exch-Intended-Mailbox-Plan-Link
   * - Description: ms-Exch-Intended-Mailbox-Plan-Link
   * - ldapDisplayName: msExchIntendedMailboxPlanLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51563
   */
  msExchIntendedMailboxPlanLink = "msExchIntendedMailboxPlanLink",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Batch-Name
   * - Description: ms-Exch-Mailbox-Move-Batch-Name
   * - ldapDisplayName: msExchMailboxMoveBatchName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51438
   */
  msExchMailboxMoveBatchName = "msExchMailboxMoveBatchName",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Move-Source-MDB-Link
   * - Description: ms-Exch-Mailbox-Move-Source-MDB-Link
   * - ldapDisplayName: msExchMailboxMoveSourceMDBLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51439
   */
  msExchMailboxMoveSourceMdbLink = "msExchMailboxMoveSourceMDBLink",
  /**
   * - Admin DisplayName: ms-Exch-RMS-Computer-Accounts-Link
   * - Description: ms-Exch-RMS-Computer-Accounts-Link
   * - ldapDisplayName: msExchRMSComputerAccountsLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51492
   */
  msExchRmsComputerAccountsLink = "msExchRMSComputerAccountsLink",
  /**
   * - Admin DisplayName: ms-Exch-License-Token
   * - Description: ms-Exch-License-Token
   * - ldapDisplayName: msExchLicenseToken
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51570
   */
  msExchLicenseToken = "msExchLicenseToken",
  /**
   * - Admin DisplayName: ms-Exch-Object-ID
   * - Description: ms-Exch-Object-ID
   * - ldapDisplayName: msExchObjectID
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51569
   */
  msExchObjectId = "msExchObjectID",
  /**
   * - Admin DisplayName: ms-Exch-Resource-Capacity
   * - Description: ms-Exch-Resource-Capacity
   * - ldapDisplayName: msExchResourceCapacity
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50332
   */
  msExchResourceCapacity = "msExchResourceCapacity",
  /**
   * - Admin DisplayName: ms-Exch-Resource-Display
   * - Description: ms-Exch-Resource-Display
   * - ldapDisplayName: msExchResourceDisplay
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50334
   */
  msExchResourceDisplay = "msExchResourceDisplay",
  /**
   * - Admin DisplayName: ms-Exch-Resource-Meta-Data
   * - Description: ms-Exch-Resource-Meta-Data
   * - ldapDisplayName: msExchResourceMetaData
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50333
   */
  msExchResourceMetaData = "msExchResourceMetaData",
  /**
   * - Admin DisplayName: ms-Exch-Resource-Search-Properties
   * - Description: ms-Exch-Resource-Search-Properties
   * - ldapDisplayName: msExchResourceSearchProperties
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50331
   */
  msExchResourceSearchProperties = "msExchResourceSearchProperties",
  /**
   * - Admin DisplayName: ms-Exch-UM-Dtmf-Map
   * - Description: ms-Exch-UM-Dtmf-Map
   * - ldapDisplayName: msExchUMDtmfMap
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50341
   */
  msExchUmDtmfMap = "msExchUMDtmfMap",
  /**
   * - Admin DisplayName: ms-Exch-UM-List-In-Directory-Search
   * - Description: ms-Exch-UM-List-In-Directory-Search
   * - ldapDisplayName: msExchUMListInDirectorySearch
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50342
   */
  msExchUmListInDirectorySearch = "msExchUMListInDirectorySearch",
  /**
   * - Admin DisplayName: ms-Exch-UM-Recipient-Dial-Plan-Link
   * - Description: ms-Exch-UM-Recipient-Dial-Plan-Link
   * - ldapDisplayName: msExchUMRecipientDialPlanLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50388
   */
  msExchUmRecipientDialPlanLink = "msExchUMRecipientDialPlanLink",
  /**
   * - Admin DisplayName: ms-Exch-UM-Spoken-Name
   * - Description: ms-Exch-UM-Spoken-Name
   * - ldapDisplayName: msExchUMSpokenName
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.50336
   */
  msExchUmSpokenName = "msExchUMSpokenName",
  /**
   * - Admin DisplayName: ms-Exch-Message-Hygiene-Flags
   * - Description: ms-Exch-Message-Hygiene-Flags
   * - ldapDisplayName: msExchMessageHygieneFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50687
   */
  msExchMessageHygieneFlags = "msExchMessageHygieneFlags",
  /**
   * - Admin DisplayName: ms-Exch-HAB-Show-In-Departments
   * - Description: ms-Exch-HAB-Show-In-Departments
   * - ldapDisplayName: msExchHABShowInDepartments
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50823
   */
  msExchHabShowInDepartments = "msExchHABShowInDepartments",
  /**
   * - Admin DisplayName: ms-Exch-Message-Hygiene-SCL-Delete-Threshold
   * - Description: ms-Exch-Message-Hygiene-SCL-Delete-Threshold
   * - ldapDisplayName: msExchMessageHygieneSCLDeleteThreshold
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50779
   */
  msExchMessageHygieneSclDeleteThreshold = "msExchMessageHygieneSCLDeleteThreshold",
  /**
   * - Admin DisplayName: ms-Exch-Message-Hygiene-SCL-Junk-Threshold
   * - Description: ms-Exch-Message-Hygiene-SCL-Junk-Threshold
   * - ldapDisplayName: msExchMessageHygieneSCLJunkThreshold
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50783
   */
  msExchMessageHygieneSclJunkThreshold = "msExchMessageHygieneSCLJunkThreshold",
  /**
   * - Admin DisplayName: ms-Exch-Message-Hygiene-SCL-Quarantine-Threshold
   * - Description: ms-Exch-Message-Hygiene-SCL-Quarantine-Threshold
   * - ldapDisplayName: msExchMessageHygieneSCLQuarantineThreshold
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50781
   */
  msExchMessageHygieneSclQuarantineThreshold = "msExchMessageHygieneSCLQuarantineThreshold",
  /**
   * - Admin DisplayName: ms-Exch-Message-Hygiene-SCL-Reject-Threshold
   * - Description: ms-Exch-Message-Hygiene-SCL-Reject-Threshold
   * - ldapDisplayName: msExchMessageHygieneSCLRejectThreshold
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50780
   */
  msExchMessageHygieneSclRejectThreshold = "msExchMessageHygieneSCLRejectThreshold",
  /**
   * - Admin DisplayName: ms-Exch-Recipient-Display-Type
   * - Description: ms-Exch-Recipient-Display-Type
   * - ldapDisplayName: msExchRecipientDisplayType
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50730
   */
  msExchRecipientDisplayType = "msExchRecipientDisplayType",
  /**
   * - Admin DisplayName: ms-Exch-Recipient-Type-Details
   * - Description: ms-Exch-Recipient-Type-Details
   * - ldapDisplayName: msExchRecipientTypeDetails
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.7000.102.50855
   */
  msExchRecipientTypeDetails = "msExchRecipientTypeDetails",
  /**
   * - Admin DisplayName: ms-Exch-Safe-Recipients-Hash
   * - Description: ms-Exch-Safe-Recipients-Hash
   * - ldapDisplayName: msExchSafeRecipientsHash
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.50766
   */
  msExchSafeRecipientsHash = "msExchSafeRecipientsHash",
  /**
   * - Admin DisplayName: ms-Exch-Safe-Senders-Hash
   * - Description: ms-Exch-Safe-Senders-Hash
   * - ldapDisplayName: msExchSafeSendersHash
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.50765
   */
  msExchSafeSendersHash = "msExchSafeSendersHash",
  /**
   * - Admin DisplayName: ms-Exch-Sender-Hint-Translations
   * - Description: ms-Exch-Sender-Hint-Translations
   * - ldapDisplayName: msExchSenderHintTranslations
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50899
   */
  msExchSenderHintTranslations = "msExchSenderHintTranslations",
  /**
   * - Admin DisplayName: ms-Exch-Arbitration-Mailbox
   * - Description: ms-Exch-Arbitration-Mailbox
   * - ldapDisplayName: msExchArbitrationMailbox
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50957
   */
  msExchArbitrationMailbox = "msExchArbitrationMailbox",
  /**
   * - Admin DisplayName: ms-Exch-Blocked-Senders-Hash
   * - Description: ms-Exch-Blocked-Senders-Hash
   * - ldapDisplayName: msExchBlockedSendersHash
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.50976
   */
  msExchBlockedSendersHash = "msExchBlockedSendersHash",
  /**
   * - Admin DisplayName: ms-Exch-Co-Managed-Objects-BL
   * - Description: ms-Exch-Co-Managed-Objects-BL
   * - ldapDisplayName: msExchCoManagedObjectsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50954
   */
  msExchCoManagedObjectsBl = "msExchCoManagedObjectsBL",
  /**
   * - Admin DisplayName: ms-Exch-Enable-Moderation
   * - Description: ms-Exch-Enable-Moderation
   * - ldapDisplayName: msExchEnableModeration
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.50969
   */
  msExchEnableModeration = "msExchEnableModeration",
  /**
   * - Admin DisplayName: ms-Exch-Moderated-By-Link
   * - Description: ms-Exch-Moderated-By-Link
   * - ldapDisplayName: msExchModeratedByLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50952
   */
  msExchModeratedByLink = "msExchModeratedByLink",
  /**
   * - Admin DisplayName: ms-Exch-Moderated-Objects-BL
   * - Description: ms-Exch-Moderated-Objects-BL
   * - ldapDisplayName: msExchModeratedObjectsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50955
   */
  msExchModeratedObjectsBl = "msExchModeratedObjectsBL",
  /**
   * - Admin DisplayName: ms-Exch-Moderation-Flags
   * - Description: ms-Exch-Moderation-Flags
   * - ldapDisplayName: msExchModerationFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50972
   */
  msExchModerationFlags = "msExchModerationFlags",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Policy
   * - Description: ms-Exch-OWA-Policy
   * - ldapDisplayName: msExchOWAPolicy
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50993
   */
  msExchOwaPolicy = "msExchOWAPolicy",
  /**
   * - Admin DisplayName: ms-Exch-Signup-Addresses
   * - Description: ms-Exch-Signup-Addresses
   * - ldapDisplayName: msExchSignupAddresses
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50990
   */
  msExchSignupAddresses = "msExchSignupAddresses",
  /**
   * - Admin DisplayName: ms-Exch-Windows-Live-ID
   * - Description: ms-Exch-Windows-Live-ID
   * - ldapDisplayName: msExchWindowsLiveID
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51016
   */
  msExchWindowsLiveId = "msExchWindowsLiveID",
  /**
   * - Admin DisplayName: ms-Exch-Immutable-Id
   * - Description: ms-Exch-Immutable-Id
   * - ldapDisplayName: msExchImmutableId
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51022
   */
  msExchImmutableId = "msExchImmutableId",
  /**
   * - Admin DisplayName: ms-Exch-Sharing-Partner-Identities
   * - Description: ms-Exch-Sharing-Partner-Identities
   * - ldapDisplayName: msExchSharingPartnerIdentities
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51031
   */
  msExchSharingPartnerIdentities = "msExchSharingPartnerIdentities",
  /**
   * - Admin DisplayName: ms-Exch-Transport-Recipient-Settings-Flags
   * - Description: ms-Exch-Transport-Recipient-Settings-Flags
   * - ldapDisplayName: msExchTransportRecipientSettingsFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51025
   */
  msExchTransportRecipientSettingsFlags = "msExchTransportRecipientSettingsFlags",
  /**
   * - Admin DisplayName: ms-Exch-External-Sync-State
   * - Description: ms-Exch-External-Sync-State
   * - ldapDisplayName: msExchExternalSyncState
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51032
   */
  msExchExternalSyncState = "msExchExternalSyncState",
  /**
   * - Admin DisplayName: ms-Exch-Policies-Included
   * - Description: ms-Exch-Policies-Included
   * - ldapDisplayName: msExchPoliciesIncluded
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50050
   */
  msExchPoliciesIncluded = "msExchPoliciesIncluded",
  /**
   * - Admin DisplayName: ms-Exch-Policies-Excluded
   * - Description: ms-Exch-Policies-Excluded
   * - ldapDisplayName: msExchPoliciesExcluded
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50051
   */
  msExchPoliciesExcluded = "msExchPoliciesExcluded",
  /**
   * - Admin DisplayName: ms-Exch-Unauth-Orig-BL
   * - Description: ms-Exch-Unauth-Orig-BL
   * - ldapDisplayName: unauthOrigBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.292
   */
  unauthOrigBl = "unauthOrigBL",
  /**
   * - Admin DisplayName: ms-Exch-Public-Delegates-BL
   * - Description: ms-Exch-Public-Delegates-BL
   * - ldapDisplayName: publicDelegatesBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.295
   */
  publicDelegatesBl = "publicDelegatesBL",
  /**
   * - Admin DisplayName: ms-Exch-DL-Mem-Submit-Perms-BL
   * - Description: ms-Exch-DL-Mem-Submit-Perms-BL
   * - ldapDisplayName: dLMemSubmitPermsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.291
   */
  dLMemSubmitPermsBl = "dLMemSubmitPermsBL",
  /**
   * - Admin DisplayName: ms-Exch-DL-Mem-Reject-Perms-BL
   * - Description: ms-Exch-DL-Mem-Reject-Perms-BL
   * - ldapDisplayName: dLMemRejectPermsBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.293
   */
  dLMemRejectPermsBl = "dLMemRejectPermsBL",
  /**
   * - Admin DisplayName: ms-Exch-Auth-Orig-BL
   * - Description: ms-Exch-Auth-Orig-BL
   * - ldapDisplayName: authOrigBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.290
   */
  authOrigBl = "authOrigBL",
  /**
   * - Admin DisplayName: ms-Exch-Alt-Recipient-BL
   * - Description: ms-Exch-Alt-Recipient-BL
   * - ldapDisplayName: altRecipientBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.294
   */
  altRecipientBl = "altRecipientBL",
  /**
   * - Admin DisplayName: ms-Exch-Recip-Limit
   * - Description: ms-Exch-Recip-Limit
   * - ldapDisplayName: msExchRecipLimit
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.12523
   */
  msExchRecipLimit = "msExchRecipLimit",
  /**
   * - Admin DisplayName: ms-Exch-FB-URL
   * - Description: ms-Exch-FB-URL
   * - ldapDisplayName: msExchFBURL
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.10001
   */
  msExchFburl = "msExchFBURL",
  /**
   * - Admin DisplayName: ms-Exch-Deliv-Ext-Cont-Types
   * - Description: ms-Exch-Deliv-Ext-Cont-Types
   * - ldapDisplayName: delivExtContTypes
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.140
   */
  delivExtContTypes = "delivExtContTypes",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Data
   * - Description: ms-Exch-Extension-Data
   * - ldapDisplayName: extensionData
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.228
   */
  extensionData = "extensionData",
  /**
   * - Admin DisplayName: ms-Exch-Delivery-Mechanism
   * - Description: ms-Exch-Delivery-Mechanism
   * - ldapDisplayName: deliveryMechanism
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.241
   */
  deliveryMechanism = "deliveryMechanism",
  /**
   * - Admin DisplayName: ms-Exch-DL-Mem-Default
   * - Description: ms-Exch-DL-Mem-Default
   * - ldapDisplayName: dLMemDefault
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.12527
   */
  dLMemDefault = "dLMemDefault",
  /**
   * - Admin DisplayName: ms-Exch-Custom-Proxy-Addresses
   * - Description: ms-Exch-Custom-Proxy-Addresses
   * - ldapDisplayName: msExchCustomProxyAddresses
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50049
   */
  msExchCustomProxyAddresses = "msExchCustomProxyAddresses",
  /**
   * - Admin DisplayName: ms-Exch-Previous-Account-Sid
   * - Description: ms-Exch-Previous-Account-Sid
   * - ldapDisplayName: msExchPreviousAccountSid
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.7000.102.93
   */
  msExchPreviousAccountSid = "msExchPreviousAccountSid",
  /**
   * - Admin DisplayName: Version-Number
   * - Description: Version-Number
   * - ldapDisplayName: versionNumber
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.141
   */
  versionNumber = "versionNumber",
  /**
   * - Admin DisplayName: ms-Exch-Imported-From
   * - Description: ms-Exch-Imported-From
   * - ldapDisplayName: importedFrom
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.263
   */
  importedFrom = "importedFrom",
  /**
   * - Admin DisplayName: ms-Exch-Master-Account-Sid
   * - Description: ms-Exch-Master-Account-Sid
   * - ldapDisplayName: msExchMasterAccountSid
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.7000.102.81
   */
  msExchMasterAccountSid = "msExchMasterAccountSid",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Security-Descriptor
   * - Description: ms-Exch-Mailbox-Security-Descriptor
   * - ldapDisplayName: msExchMailboxSecurityDescriptor
   * - attributeSyntax: 2.5.5.15
   * - attributeID: 1.2.840.113556.1.4.7000.102.80
   */
  msExchMailboxSecurityDescriptor = "msExchMailboxSecurityDescriptor",
  /**
   * - Admin DisplayName: ms-Exch-X500-NC
   * - Description: ms-Exch-X500-NC
   * - ldapDisplayName: dnQualifier
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.509
   */
  dnQualifier = "dnQualifier",
  /**
   * - Admin DisplayName: ms-Exch-Unauth-Orig
   * - Description: ms-Exch-Unauth-Orig
   * - ldapDisplayName: unauthOrig
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.2.221
   */
  unauthOrig = "unauthOrig",
  /**
   * - Admin DisplayName: ms-Exch-Target-Address
   * - Description: ms-Exch-Target-Address
   * - ldapDisplayName: targetAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.352
   */
  targetAddress = "targetAddress",
  /**
   * - Admin DisplayName: ms-Exch-Submission-Cont-Length
   * - Description: ms-Exch-Submission-Cont-Length
   * - ldapDisplayName: submissionContLength
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.280
   */
  submissionContLength = "submissionContLength",
  /**
   * - Admin DisplayName: ms-Exch-Security-Protocol
   * - Description: ms-Exch-Security-Protocol
   * - ldapDisplayName: securityProtocol
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.82
   */
  securityProtocol = "securityProtocol",
  /**
   * - Admin DisplayName: ms-Exch-Replication-Sensitivity
   * - Description: ms-Exch-Replication-Sensitivity
   * - ldapDisplayName: replicationSensitivity
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.223
   */
  replicationSensitivity = "replicationSensitivity",
  /**
   * - Admin DisplayName: ms-Exch-Public-Delegates
   * - Description: ms-Exch-Public-Delegates
   * - ldapDisplayName: publicDelegates
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.238
   */
  publicDelegates = "publicDelegates",
  /**
   * - Admin DisplayName: ms-Exch-Protocol-Settings
   * - Description: ms-Exch-Protocol-Settings
   * - ldapDisplayName: protocolSettings
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.528
   */
  protocolSettings = "protocolSettings",
  /**
   * - Admin DisplayName: ms-Exch-POP-Content-Format
   * - Description: ms-Exch-POP-Content-Format
   * - ldapDisplayName: pOPContentFormat
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.466
   */
  pOpContentFormat = "pOPContentFormat",
  /**
   * - Admin DisplayName: ms-Exch-POP-Character-Set
   * - Description: ms-Exch-POP-Character-Set
   * - ldapDisplayName: pOPCharacterSet
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.468
   */
  pOpCharacterSet = "pOPCharacterSet",
  /**
   * - Admin DisplayName: ms-Exch-MAPI-Recipient
   * - Description: ms-Exch-MAPI-Recipient
   * - ldapDisplayName: mAPIRecipient
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.2.371
   */
  mApiRecipient = "mAPIRecipient",
  /**
   * - Admin DisplayName: ms-Exch-Mail-Nickname
   * - Description: ms-Exch-Mail-Nickname
   * - ldapDisplayName: mailNickname
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.447
   */
  mailNickname = "mailNickname",
  /**
   * - Admin DisplayName: ms-Exch-Language-ISO639
   * - Description: ms-Exch-Language-ISO639
   * - ldapDisplayName: language
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.616
   */
  language = "language",
  /**
   * - Admin DisplayName: ms-Exch-Language
   * - Description: ms-Exch-Language
   * - ldapDisplayName: languageCode
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.467
   */
  languageCode = "languageCode",
  /**
   * - Admin DisplayName: ms-Exch-Internet-Encoding
   * - Description: ms-Exch-Internet-Encoding
   * - ldapDisplayName: internetEncoding
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.551
   */
  internetEncoding = "internetEncoding",
  /**
   * - Admin DisplayName: ms-Exch-Home-MTA
   * - Description: ms-Exch-Home-MTA
   * - ldapDisplayName: homeMTA
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.171
   */
  homeMta = "homeMTA",
  /**
   * - Admin DisplayName: ms-Exch-Forwarding-Address
   * - Description: ms-Exch-Forwarding-Address
   * - ldapDisplayName: forwardingAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.606
   */
  forwardingAddress = "forwardingAddress",
  /**
   * - Admin DisplayName: ms-Exch-Form-Data
   * - Description: ms-Exch-Form-Data
   * - ldapDisplayName: formData
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.607
   */
  formData = "formData",
  /**
   * - Admin DisplayName: ms-Exch-Folder-Pathname
   * - Description: ms-Exch-Folder-Pathname
   * - ldapDisplayName: folderPathname
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.337
   */
  folderPathname = "folderPathname",
  /**
   * - Admin DisplayName: ms-Exch-Expiration-Time
   * - Description: ms-Exch-Expiration-Time
   * - ldapDisplayName: expirationTime
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.2.394
   */
  expirationTime = "expirationTime",
  /**
   * - Admin DisplayName: ms-Exch-Expansion-Server-Name
   * - Description: ms-Exch-Expansion-Server-Name
   * - ldapDisplayName: msExchExpansionServerName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.49
   */
  msExchExpansionServerName = "msExchExpansionServerName",
  /**
   * - Admin DisplayName: ms-Exch-Enabled-Protocols
   * - Description: ms-Exch-Enabled-Protocols
   * - ldapDisplayName: enabledProtocols
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.474
   */
  enabledProtocols = "enabledProtocols",
  /**
   * - Admin DisplayName: ms-Exch-DL-Mem-Submit-Perms
   * - Description: ms-Exch-DL-Mem-Submit-Perms
   * - ldapDisplayName: dLMemSubmitPerms
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.2.144
   */
  dLMemSubmitPerms = "dLMemSubmitPerms",
  /**
   * - Admin DisplayName: ms-Exch-DL-Mem-Reject-Perms
   * - Description: ms-Exch-DL-Mem-Reject-Perms
   * - ldapDisplayName: dLMemRejectPerms
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.2.47
   */
  dLMemRejectPerms = "dLMemRejectPerms",
  /**
   * - Admin DisplayName: ms-Exch-Deliver-And-Redirect
   * - Description: ms-Exch-Deliver-And-Redirect
   * - ldapDisplayName: deliverAndRedirect
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.2.190
   */
  deliverAndRedirect = "deliverAndRedirect",
  /**
   * - Admin DisplayName: ms-Exch-Deliv-Cont-Length
   * - Description: ms-Exch-Deliv-Cont-Length
   * - ldapDisplayName: delivContLength
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.138
   */
  delivContLength = "delivContLength",
  /**
   * - Admin DisplayName: ms-Exch-AutoReply-Message
   * - Description: ms-Exch-AutoReply-Message
   * - ldapDisplayName: autoReplyMessage
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.287
   */
  autoReplyMessage = "autoReplyMessage",
  /**
   * - Admin DisplayName: ms-Exch-Auth-Orig
   * - Description: ms-Exch-Auth-Orig
   * - ldapDisplayName: authOrig
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.2.129
   */
  authOrig = "authOrig",
  /**
   * - Admin DisplayName: ms-Exch-Alt-Recipient
   * - Description: ms-Exch-Alt-Recipient
   * - ldapDisplayName: altRecipient
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.126
   */
  altRecipient = "altRecipient",
  /**
   * - Admin DisplayName: ms-Exch-Policy-Enabled
   * - Description: ms-Exch-Policy-Enabled
   * - ldapDisplayName: msExchPolicyEnabled
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.50030
   */
  msExchPolicyEnabled = "msExchPolicyEnabled",
  /**
   * - Admin DisplayName: ms-Exch-Policy-Option-List
   * - Description: ms-Exch-Policy-Option-List
   * - ldapDisplayName: msExchPolicyOptionList
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.50006
   */
  msExchPolicyOptionList = "msExchPolicyOptionList",
  /**
   * - Admin DisplayName: ms-Exch-Proxy-Custom-Proxy
   * - Description: ms-Exch-Proxy-Custom-Proxy
   * - ldapDisplayName: msExchProxyCustomProxy
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50048
   */
  msExchProxyCustomProxy = "msExchProxyCustomProxy",
  /**
   * - Admin DisplayName: ms-Exch-User-Account-Control
   * - Description: ms-Exch-User-Account-Control
   * - ldapDisplayName: msExchUserAccountControl
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.101
   */
  msExchUserAccountControl = "msExchUserAccountControl",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Folder-Set
   * - Description: ms-Exch-Mailbox-Folder-Set
   * - ldapDisplayName: msExchMailboxFolderSet
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.11091
   */
  msExchMailboxFolderSet = "msExchMailboxFolderSet",
  /**
   * - Admin DisplayName: ms-Exch-RequireAuthToSendTo
   * - Description: ms-Exch-RequireAuthToSendTo
   * - ldapDisplayName: msExchRequireAuthToSendTo
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.5062
   */
  msExchRequireAuthToSendTo = "msExchRequireAuthToSendTo",
  /**
   * - Admin DisplayName: User-SMIME-Certificate
   * - Description: User-SMIME-Certificate
   * - ldapDisplayName: userSMIMECertificate
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.16.840.1.113730.3.140
   */
  userSmimeCertificate = "userSMIMECertificate",
  /**
   * - Admin DisplayName: secretary
   * - Description: Specifies the secretary of a person.
   * - ldapDisplayName: secretary
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 0.9.2342.19200300.100.1.21
   */
  secretary = "secretary",
  /**
   * - Admin DisplayName: ms-Exch-LabeledURI
   * - Description: ms-Exch-LabeledURI
   * - ldapDisplayName: msExchLabeledURI
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.593
   */
  msExchLabeledUri = "msExchLabeledURI",
  /**
   * - Admin DisplayName: ms-Exch-Assistant-Name
   * - Description: ms-Exch-Assistant-Name
   * - ldapDisplayName: msExchAssistantName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.444
   */
  msExchAssistantName = "msExchAssistantName",
  /**
   * - Admin DisplayName: labeledURI
   * - Description: A Uniform Resource Identifier followed by a label. The label is used to describe the resource to which the URI points, and is intended as a friendly name fit for human consumption.
   * - ldapDisplayName: labeledURI
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.3.6.1.4.1.250.1.57
   */
  labeledUri = "labeledURI",
  /**
   * - Admin DisplayName: X509-Cert
   * - Description: X509-Cert
   * - ldapDisplayName: userCertificate
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.5.4.36
   */
  userCertificate = "userCertificate",
  /**
   * - Admin DisplayName: User-Cert
   * - Description: User-Cert
   * - ldapDisplayName: userCert
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.645
   */
  userCert = "userCert",
  /**
   * - Admin DisplayName: Text-Encoded-OR-Address
   * - Description: Text-Encoded-OR-Address
   * - ldapDisplayName: textEncodedORAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 0.9.2342.19200300.100.1.2
   */
  textEncodedOrAddress = "textEncodedORAddress",
  /**
   * - Admin DisplayName: Show-In-Address-Book
   * - Description: Show-In-Address-Book
   * - ldapDisplayName: showInAddressBook
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.644
   */
  showInAddressBook = "showInAddressBook",
  /**
   * - Admin DisplayName: Legacy-Exchange-DN
   * - Description: Legacy-Exchange-DN
   * - ldapDisplayName: legacyExchangeDN
   * - attributeSyntax: 2.5.5.4
   * - attributeID: 1.2.840.113556.1.4.655
   */
  legacyExchangeDn = "legacyExchangeDN",
  /**
   * - Admin DisplayName: Garbage-Coll-Period
   * - Description: Garbage-Coll-Period
   * - ldapDisplayName: garbageCollPeriod
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.301
   */
  garbageCollPeriod = "garbageCollPeriod",
  /**
   * - Admin DisplayName: Comment
   * - Description: Comment
   * - ldapDisplayName: info
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.81
   */
  info = "info",
  /**
   * - Admin DisplayName: SAM-Account-Name
   * - Description: SAM-Account-Name
   * - ldapDisplayName: sAMAccountName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.221
   */
  sAmAccountName = "sAMAccountName",
  /**
   * - Admin DisplayName: Object-Sid
   * - Description: Object-Sid
   * - ldapDisplayName: objectSid
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.146
   */
  objectSid = "objectSid",
  /**
   * - Admin DisplayName: ms-DS-Token-Group-Names-No-GC-Acceptable
   * - Description: The distinguished names of security groups the principal is directly or indirectly a member of as reported by the local DC.
   * - ldapDisplayName: msds-tokenGroupNamesNoGCAcceptable
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2347
   */
  msdsTokenGroupNamesNoGcAcceptable = "msds-tokenGroupNamesNoGCAcceptable",
  /**
   * - Admin DisplayName: ms-DS-Token-Group-Names-Global-And-Universal
   * - Description: The distinguished names of global and universal security groups the principal is directly or indirectly a member of.
   * - ldapDisplayName: msds-tokenGroupNamesGlobalAndUniversal
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2346
   */
  msdsTokenGroupNamesGlobalAndUniversal = "msds-tokenGroupNamesGlobalAndUniversal",
  /**
   * - Admin DisplayName: ms-DS-Token-Group-Names
   * - Description: The distinguished names of security groups the principal is directly or indirectly a member of.
   * - ldapDisplayName: msds-tokenGroupNames
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2345
   */
  msdsTokenGroupNames = "msds-tokenGroupNames",
  /**
   * - Admin DisplayName: Supplemental-Credentials
   * - Description: Supplemental-Credentials
   * - ldapDisplayName: supplementalCredentials
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.125
   */
  supplementalCredentials = "supplementalCredentials",
  /**
   * - Admin DisplayName: SID-History
   * - Description: SID-History
   * - ldapDisplayName: sIDHistory
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.609
   */
  sIdHistory = "sIDHistory",
  /**
   * - Admin DisplayName: Security-Identifier
   * - Description: Security-Identifier
   * - ldapDisplayName: securityIdentifier
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.121
   */
  securityIdentifier = "securityIdentifier",
  /**
   * - Admin DisplayName: SAM-Account-Type
   * - Description: SAM-Account-Type
   * - ldapDisplayName: sAMAccountType
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.302
   */
  sAmAccountType = "sAMAccountType",
  /**
   * - Admin DisplayName: Rid
   * - Description: Rid
   * - ldapDisplayName: rid
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.153
   */
  rid = "rid",
  /**
   * - Admin DisplayName: Token-Groups-No-GC-Acceptable
   * - Description: Token-Groups-No-GC-Acceptable
   * - ldapDisplayName: tokenGroupsNoGCAcceptable
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.1303
   */
  tokenGroupsNoGcAcceptable = "tokenGroupsNoGCAcceptable",
  /**
   * - Admin DisplayName: Token-Groups-Global-And-Universal
   * - Description: Token-Groups-Global-And-Universal
   * - ldapDisplayName: tokenGroupsGlobalAndUniversal
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.1418
   */
  tokenGroupsGlobalAndUniversal = "tokenGroupsGlobalAndUniversal",
  /**
   * - Admin DisplayName: Token-Groups
   * - Description: Token-Groups
   * - ldapDisplayName: tokenGroups
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.1301
   */
  tokenGroups = "tokenGroups",
  /**
   * - Admin DisplayName: ms-DS-KeyVersionNumber
   * - Description: The Kerberos version number of the current key for this account. This is a constructed attribute.
   * - ldapDisplayName: msDS-KeyVersionNumber
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1782
   */
  msDsKeyVersionNumber = "msDS-KeyVersionNumber",
  /**
   * - Admin DisplayName: Alt-Security-Identities
   * - Description: Alt-Security-Identities
   * - ldapDisplayName: altSecurityIdentities
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.867
   */
  altSecurityIdentities = "altSecurityIdentities",
  /**
   * - Admin DisplayName: Account-Name-History
   * - Description: Account-Name-History
   * - ldapDisplayName: accountNameHistory
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1307
   */
  accountNameHistory = "accountNameHistory",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute20
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute20
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2233
   */
  msDsCloudExtensionAttribute20 = "msDS-cloudExtensionAttribute20",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute19
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute19
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2232
   */
  msDsCloudExtensionAttribute19 = "msDS-cloudExtensionAttribute19",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute18
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute18
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2231
   */
  msDsCloudExtensionAttribute18 = "msDS-cloudExtensionAttribute18",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute17
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute17
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2230
   */
  msDsCloudExtensionAttribute17 = "msDS-cloudExtensionAttribute17",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute16
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute16
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2229
   */
  msDsCloudExtensionAttribute16 = "msDS-cloudExtensionAttribute16",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute15
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute15
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2228
   */
  msDsCloudExtensionAttribute15 = "msDS-cloudExtensionAttribute15",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute14
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute14
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2227
   */
  msDsCloudExtensionAttribute14 = "msDS-cloudExtensionAttribute14",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute13
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute13
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2226
   */
  msDsCloudExtensionAttribute13 = "msDS-cloudExtensionAttribute13",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute12
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute12
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2225
   */
  msDsCloudExtensionAttribute12 = "msDS-cloudExtensionAttribute12",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute11
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute11
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2224
   */
  msDsCloudExtensionAttribute11 = "msDS-cloudExtensionAttribute11",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute10
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute10
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2223
   */
  msDsCloudExtensionAttribute10 = "msDS-cloudExtensionAttribute10",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute9
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute9
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2222
   */
  msDsCloudExtensionAttribute9 = "msDS-cloudExtensionAttribute9",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute8
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute8
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2221
   */
  msDsCloudExtensionAttribute8 = "msDS-cloudExtensionAttribute8",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute7
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute7
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2220
   */
  msDsCloudExtensionAttribute7 = "msDS-cloudExtensionAttribute7",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute6
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute6
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2219
   */
  msDsCloudExtensionAttribute6 = "msDS-cloudExtensionAttribute6",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute5
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute5
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2218
   */
  msDsCloudExtensionAttribute5 = "msDS-cloudExtensionAttribute5",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute4
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute4
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2217
   */
  msDsCloudExtensionAttribute4 = "msDS-cloudExtensionAttribute4",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute3
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute3
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2216
   */
  msDsCloudExtensionAttribute3 = "msDS-cloudExtensionAttribute3",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute2
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute2
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2215
   */
  msDsCloudExtensionAttribute2 = "msDS-cloudExtensionAttribute2",
  /**
   * - Admin DisplayName: ms-DS-cloudExtensionAttribute1
   * - Description: An attribute used to house an arbitrary cloud-relevant string
   * - ldapDisplayName: msDS-cloudExtensionAttribute1
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2214
   */
  msDsCloudExtensionAttribute1 = "msDS-cloudExtensionAttribute1",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-35
   * - Description: ms-Exch-Extension-Attribute-35
   * - ldapDisplayName: msExchExtensionAttribute35
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51903
   */
  msExchExtensionAttribute35 = "msExchExtensionAttribute35",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-34
   * - Description: ms-Exch-Extension-Attribute-34
   * - ldapDisplayName: msExchExtensionAttribute34
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51902
   */
  msExchExtensionAttribute34 = "msExchExtensionAttribute34",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-33
   * - Description: ms-Exch-Extension-Attribute-33
   * - ldapDisplayName: msExchExtensionAttribute33
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51901
   */
  msExchExtensionAttribute33 = "msExchExtensionAttribute33",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-32
   * - Description: ms-Exch-Extension-Attribute-32
   * - ldapDisplayName: msExchExtensionAttribute32
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51900
   */
  msExchExtensionAttribute32 = "msExchExtensionAttribute32",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-31
   * - Description: ms-Exch-Extension-Attribute-31
   * - ldapDisplayName: msExchExtensionAttribute31
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51899
   */
  msExchExtensionAttribute31 = "msExchExtensionAttribute31",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-30
   * - Description: ms-Exch-Extension-Attribute-30
   * - ldapDisplayName: msExchExtensionAttribute30
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51898
   */
  msExchExtensionAttribute30 = "msExchExtensionAttribute30",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-29
   * - Description: ms-Exch-Extension-Attribute-29
   * - ldapDisplayName: msExchExtensionAttribute29
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51897
   */
  msExchExtensionAttribute29 = "msExchExtensionAttribute29",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-28
   * - Description: ms-Exch-Extension-Attribute-28
   * - ldapDisplayName: msExchExtensionAttribute28
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51896
   */
  msExchExtensionAttribute28 = "msExchExtensionAttribute28",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-27
   * - Description: ms-Exch-Extension-Attribute-27
   * - ldapDisplayName: msExchExtensionAttribute27
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51895
   */
  msExchExtensionAttribute27 = "msExchExtensionAttribute27",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-26
   * - Description: ms-Exch-Extension-Attribute-26
   * - ldapDisplayName: msExchExtensionAttribute26
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51894
   */
  msExchExtensionAttribute26 = "msExchExtensionAttribute26",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-25
   * - Description: ms-Exch-Extension-Attribute-25
   * - ldapDisplayName: msExchExtensionAttribute25
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51893
   */
  msExchExtensionAttribute25 = "msExchExtensionAttribute25",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-24
   * - Description: ms-Exch-Extension-Attribute-24
   * - ldapDisplayName: msExchExtensionAttribute24
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51892
   */
  msExchExtensionAttribute24 = "msExchExtensionAttribute24",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-23
   * - Description: ms-Exch-Extension-Attribute-23
   * - ldapDisplayName: msExchExtensionAttribute23
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51891
   */
  msExchExtensionAttribute23 = "msExchExtensionAttribute23",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-22
   * - Description: ms-Exch-Extension-Attribute-22
   * - ldapDisplayName: msExchExtensionAttribute22
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51890
   */
  msExchExtensionAttribute22 = "msExchExtensionAttribute22",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-21
   * - Description: ms-Exch-Extension-Attribute-21
   * - ldapDisplayName: msExchExtensionAttribute21
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51889
   */
  msExchExtensionAttribute21 = "msExchExtensionAttribute21",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-20
   * - Description: ms-Exch-Extension-Attribute-20
   * - ldapDisplayName: msExchExtensionAttribute20
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51888
   */
  msExchExtensionAttribute20 = "msExchExtensionAttribute20",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-19
   * - Description: ms-Exch-Extension-Attribute-19
   * - ldapDisplayName: msExchExtensionAttribute19
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51887
   */
  msExchExtensionAttribute19 = "msExchExtensionAttribute19",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-18
   * - Description: ms-Exch-Extension-Attribute-18
   * - ldapDisplayName: msExchExtensionAttribute18
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51886
   */
  msExchExtensionAttribute18 = "msExchExtensionAttribute18",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-17
   * - Description: ms-Exch-Extension-Attribute-17
   * - ldapDisplayName: msExchExtensionAttribute17
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51885
   */
  msExchExtensionAttribute17 = "msExchExtensionAttribute17",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-16
   * - Description: ms-Exch-Extension-Attribute-16
   * - ldapDisplayName: msExchExtensionAttribute16
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51884
   */
  msExchExtensionAttribute16 = "msExchExtensionAttribute16",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-36
   * - Description: ms-Exch-Extension-Attribute-36
   * - ldapDisplayName: msExchExtensionAttribute36
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51904
   */
  msExchExtensionAttribute36 = "msExchExtensionAttribute36",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-37
   * - Description: ms-Exch-Extension-Attribute-37
   * - ldapDisplayName: msExchExtensionAttribute37
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51905
   */
  msExchExtensionAttribute37 = "msExchExtensionAttribute37",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-38
   * - Description: ms-Exch-Extension-Attribute-38
   * - ldapDisplayName: msExchExtensionAttribute38
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51906
   */
  msExchExtensionAttribute38 = "msExchExtensionAttribute38",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-39
   * - Description: ms-Exch-Extension-Attribute-39
   * - ldapDisplayName: msExchExtensionAttribute39
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51907
   */
  msExchExtensionAttribute39 = "msExchExtensionAttribute39",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-40
   * - Description: ms-Exch-Extension-Attribute-40
   * - ldapDisplayName: msExchExtensionAttribute40
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51908
   */
  msExchExtensionAttribute40 = "msExchExtensionAttribute40",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-41
   * - Description: ms-Exch-Extension-Attribute-41
   * - ldapDisplayName: msExchExtensionAttribute41
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51909
   */
  msExchExtensionAttribute41 = "msExchExtensionAttribute41",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-42
   * - Description: ms-Exch-Extension-Attribute-42
   * - ldapDisplayName: msExchExtensionAttribute42
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51910
   */
  msExchExtensionAttribute42 = "msExchExtensionAttribute42",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-43
   * - Description: ms-Exch-Extension-Attribute-43
   * - ldapDisplayName: msExchExtensionAttribute43
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51911
   */
  msExchExtensionAttribute43 = "msExchExtensionAttribute43",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-44
   * - Description: ms-Exch-Extension-Attribute-44
   * - ldapDisplayName: msExchExtensionAttribute44
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51912
   */
  msExchExtensionAttribute44 = "msExchExtensionAttribute44",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-45
   * - Description: ms-Exch-Extension-Attribute-45
   * - ldapDisplayName: msExchExtensionAttribute45
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51913
   */
  msExchExtensionAttribute45 = "msExchExtensionAttribute45",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Custom-Attribute-1
   * - Description: ms-Exch-Extension-Custom-Attribute-1
   * - ldapDisplayName: msExchExtensionCustomAttribute1
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51876
   */
  msExchExtensionCustomAttribute1 = "msExchExtensionCustomAttribute1",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Custom-Attribute-2
   * - Description: ms-Exch-Extension-Custom-Attribute-2
   * - ldapDisplayName: msExchExtensionCustomAttribute2
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51877
   */
  msExchExtensionCustomAttribute2 = "msExchExtensionCustomAttribute2",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Custom-Attribute-3
   * - Description: ms-Exch-Extension-Custom-Attribute-3
   * - ldapDisplayName: msExchExtensionCustomAttribute3
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51878
   */
  msExchExtensionCustomAttribute3 = "msExchExtensionCustomAttribute3",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Custom-Attribute-4
   * - Description: ms-Exch-Extension-Custom-Attribute-4
   * - ldapDisplayName: msExchExtensionCustomAttribute4
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51879
   */
  msExchExtensionCustomAttribute4 = "msExchExtensionCustomAttribute4",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Custom-Attribute-5
   * - Description: ms-Exch-Extension-Custom-Attribute-5
   * - ldapDisplayName: msExchExtensionCustomAttribute5
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51880
   */
  msExchExtensionCustomAttribute5 = "msExchExtensionCustomAttribute5",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-9
   * - Description: ms-Exch-Extension-Attribute-9
   * - ldapDisplayName: extensionAttribute9
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.431
   */
  extensionAttribute9 = "extensionAttribute9",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-8
   * - Description: ms-Exch-Extension-Attribute-8
   * - ldapDisplayName: extensionAttribute8
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.430
   */
  extensionAttribute8 = "extensionAttribute8",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-7
   * - Description: ms-Exch-Extension-Attribute-7
   * - ldapDisplayName: extensionAttribute7
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.429
   */
  extensionAttribute7 = "extensionAttribute7",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-6
   * - Description: ms-Exch-Extension-Attribute-6
   * - ldapDisplayName: extensionAttribute6
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.428
   */
  extensionAttribute6 = "extensionAttribute6",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-5
   * - Description: ms-Exch-Extension-Attribute-5
   * - ldapDisplayName: extensionAttribute5
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.427
   */
  extensionAttribute5 = "extensionAttribute5",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-4
   * - Description: ms-Exch-Extension-Attribute-4
   * - ldapDisplayName: extensionAttribute4
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.426
   */
  extensionAttribute4 = "extensionAttribute4",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-3
   * - Description: ms-Exch-Extension-Attribute-3
   * - ldapDisplayName: extensionAttribute3
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.425
   */
  extensionAttribute3 = "extensionAttribute3",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-2
   * - Description: ms-Exch-Extension-Attribute-2
   * - ldapDisplayName: extensionAttribute2
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.424
   */
  extensionAttribute2 = "extensionAttribute2",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-15
   * - Description: ms-Exch-Extension-Attribute-15
   * - ldapDisplayName: extensionAttribute15
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.603
   */
  extensionAttribute15 = "extensionAttribute15",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-14
   * - Description: ms-Exch-Extension-Attribute-14
   * - ldapDisplayName: extensionAttribute14
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.602
   */
  extensionAttribute14 = "extensionAttribute14",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-13
   * - Description: ms-Exch-Extension-Attribute-13
   * - ldapDisplayName: extensionAttribute13
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.601
   */
  extensionAttribute13 = "extensionAttribute13",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-12
   * - Description: ms-Exch-Extension-Attribute-12
   * - ldapDisplayName: extensionAttribute12
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.600
   */
  extensionAttribute12 = "extensionAttribute12",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-11
   * - Description: ms-Exch-Extension-Attribute-11
   * - ldapDisplayName: extensionAttribute11
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.599
   */
  extensionAttribute11 = "extensionAttribute11",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-10
   * - Description: ms-Exch-Extension-Attribute-10
   * - ldapDisplayName: extensionAttribute10
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.432
   */
  extensionAttribute10 = "extensionAttribute10",
  /**
   * - Admin DisplayName: ms-Exch-Extension-Attribute-1
   * - Description: ms-Exch-Extension-Attribute-1
   * - ldapDisplayName: extensionAttribute1
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.2.423
   */
  extensionAttribute1 = "extensionAttribute1",
  /**
   * - Admin DisplayName: ms-Exch-Data-Encryption-Policy-Link
   * - Description: ms-Exch-Data-Encryption-Policy-Link
   * - ldapDisplayName: msExchDataEncryptionPolicyLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.52151
   */
  msExchDataEncryptionPolicyLink = "msExchDataEncryptionPolicyLink",
  /**
   * - Admin DisplayName: ms-Exch-Unified-Mailbox
   * - Description: ms-Exch-Unified-Mailbox
   * - ldapDisplayName: msExchUnifiedMailbox
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.52136
   */
  msExchUnifiedMailbox = "msExchUnifiedMailbox",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Container-Guid
   * - Description: ms-Exch-Mailbox-Container-Guid
   * - ldapDisplayName: msExchMailboxContainerGuid
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.52134
   */
  msExchMailboxContainerGuid = "msExchMailboxContainerGuid",
  /**
   * - Admin DisplayName: ms-Exch-Previous-Home-MDB-SL
   * - Description: ms-Exch-Previous-Home-MDB-SL
   * - ldapDisplayName: msExchPreviousHomeMDBSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51944
   */
  msExchPreviousHomeMdbsl = "msExchPreviousHomeMDBSL",
  /**
   * - Admin DisplayName: ms-Exch-Previous-Archive-Database-SL
   * - Description: ms-Exch-Previous-Archive-Database-SL
   * - ldapDisplayName: msExchPreviousArchiveDatabaseSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51943
   */
  msExchPreviousArchiveDatabaseSl = "msExchPreviousArchiveDatabaseSL",
  /**
   * - Admin DisplayName: ms-Exch-Home-MDB-SL
   * - Description: ms-Exch-Home-MDB-SL
   * - ldapDisplayName: msExchHomeMDBSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51930
   */
  msExchHomeMdbsl = "msExchHomeMDBSL",
  /**
   * - Admin DisplayName: ms-Exch-Disabled-Archive-Database-Link-SL
   * - Description: ms-Exch-Disabled-Archive-Database-Link-SL
   * - ldapDisplayName: msExchDisabledArchiveDatabaseLinkSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51932
   */
  msExchDisabledArchiveDatabaseLinkSl = "msExchDisabledArchiveDatabaseLinkSL",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Database-Link-SL
   * - Description: ms-Exch-Archive-Database-Link-SL
   * - ldapDisplayName: msExchArchiveDatabaseLinkSL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51931
   */
  msExchArchiveDatabaseLinkSl = "msExchArchiveDatabaseLinkSL",
  /**
   * - Admin DisplayName: ms-Exch-Team-Mailbox-Show-In-Client-List
   * - Description: ms-Exch-Team-Mailbox-Show-In-Client-List
   * - ldapDisplayName: msExchTeamMailboxShowInClientList
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51873
   */
  msExchTeamMailboxShowInClientList = "msExchTeamMailboxShowInClientList",
  /**
   * - Admin DisplayName: ms-Exch-Team-Mailbox-SharePoint-Url
   * - Description: ms-Exch-Team-Mailbox-SharePoint-Url
   * - ldapDisplayName: msExchTeamMailboxSharePointUrl
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51874
   */
  msExchTeamMailboxSharePointUrl = "msExchTeamMailboxSharePointUrl",
  /**
   * - Admin DisplayName: ms-Exch-Team-Mailbox-SharePoint-Linked-By
   * - Description: ms-Exch-Team-Mailbox-SharePoint-Linked-By
   * - ldapDisplayName: msExchTeamMailboxSharePointLinkedBy
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51875
   */
  msExchTeamMailboxSharePointLinkedBy = "msExchTeamMailboxSharePointLinkedBy",
  /**
   * - Admin DisplayName: ms-Exch-Team-Mailbox-Owners
   * - Description: ms-Exch-Team-Mailbox-Owners
   * - ldapDisplayName: msExchTeamMailboxOwners
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51872
   */
  msExchTeamMailboxOwners = "msExchTeamMailboxOwners",
  /**
   * - Admin DisplayName: ms-Exch-Team-Mailbox-Expiration
   * - Description: ms-Exch-Team-Mailbox-Expiration
   * - ldapDisplayName: msExchTeamMailboxExpiration
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51871
   */
  msExchTeamMailboxExpiration = "msExchTeamMailboxExpiration",
  /**
   * - Admin DisplayName: ms-Exch-Previous-Archive-Database
   * - Description: ms-Exch-Previous-Archive-Database
   * - ldapDisplayName: msExchPreviousArchiveDatabase
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51773
   */
  msExchPreviousArchiveDatabase = "msExchPreviousArchiveDatabase",
  /**
   * - Admin DisplayName: ms-Exch-Calendar-Logging-Quota
   * - Description: ms-Exch-Calendar-Logging-Quota
   * - ldapDisplayName: msExchCalendarLoggingQuota
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.52105
   */
  msExchCalendarLoggingQuota = "msExchCalendarLoggingQuota",
  /**
   * - Admin DisplayName: ms-Exch-Address-Book-Policy-Link
   * - Description: ms-Exch-Address-Book-Policy-Link
   * - ldapDisplayName: msExchAddressBookPolicyLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51841
   */
  msExchAddressBookPolicyLink = "msExchAddressBookPolicyLink",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Address
   * - Description: ms-Exch-Archive-Address
   * - ldapDisplayName: msExchArchiveAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51584
   */
  msExchArchiveAddress = "msExchArchiveAddress",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Status
   * - Description: ms-Exch-Archive-Status
   * - ldapDisplayName: msExchArchiveStatus
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51602
   */
  msExchArchiveStatus = "msExchArchiveStatus",
  /**
   * - Admin DisplayName: ms-Exch-Previous-Mailbox-Guid
   * - Description: ms-Exch-Previous-Mailbox-Guid
   * - ldapDisplayName: msExchPreviousMailboxGuid
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51740
   */
  msExchPreviousMailboxGuid = "msExchPreviousMailboxGuid",
  /**
   * - Admin DisplayName: ms-Exch-Disabled-Archive-Database-Link
   * - Description: ms-Exch-Disabled-Archive-Database-Link
   * - ldapDisplayName: msExchDisabledArchiveDatabaseLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51766
   */
  msExchDisabledArchiveDatabaseLink = "msExchDisabledArchiveDatabaseLink",
  /**
   * - Admin DisplayName: ms-Exch-Disabled-Archive-GUID
   * - Description: ms-Exch-Disabled-Archive-GUID
   * - ldapDisplayName: msExchDisabledArchiveGUID
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51765
   */
  msExchDisabledArchiveGuid = "msExchDisabledArchiveGUID",
  /**
   * - Admin DisplayName: ms-Exch-Alternate-Mailboxes
   * - Description: ms-Exch-Alternate-Mailboxes
   * - ldapDisplayName: msExchAlternateMailboxes
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51270
   */
  msExchAlternateMailboxes = "msExchAlternateMailboxes",
  /**
   * - Admin DisplayName: ms-Exch-UM-Mailbox-OVA-Language
   * - Description: ms-Exch-UM-Mailbox-OVA-Language
   * - ldapDisplayName: msExchUMMailboxOVALanguage
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51343
   */
  msExchUmMailboxOvaLanguage = "msExchUMMailboxOVALanguage",
  /**
   * - Admin DisplayName: ms-Exch-UM-Phone-Provider
   * - Description: ms-Exch-UM-Phone-Provider
   * - ldapDisplayName: msExchUMPhoneProvider
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51347
   */
  msExchUmPhoneProvider = "msExchUMPhoneProvider",
  /**
   * - Admin DisplayName: ms-Exch-UM-Audio-Codec-2
   * - Description: ms-Exch-UM-Audio-Codec-2
   * - ldapDisplayName: msExchUMAudioCodec2
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51413
   */
  msExchUmAudioCodec2 = "msExchUMAudioCodec2",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Database-Link
   * - Description: ms-Exch-Archive-Database-Link
   * - ldapDisplayName: msExchArchiveDatabaseLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51444
   */
  msExchArchiveDatabaseLink = "msExchArchiveDatabaseLink",
  /**
   * - Admin DisplayName: ms-Exch-Archive-GUID
   * - Description: ms-Exch-Archive-GUID
   * - ldapDisplayName: msExchArchiveGUID
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51443
   */
  msExchArchiveGuid = "msExchArchiveGUID",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Name
   * - Description: ms-Exch-Archive-Name
   * - ldapDisplayName: msExchArchiveName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51441
   */
  msExchArchiveName = "msExchArchiveName",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Quota
   * - Description: ms-Exch-Archive-Quota
   * - ldapDisplayName: msExchArchiveQuota
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.7000.102.51442
   */
  msExchArchiveQuota = "msExchArchiveQuota",
  /**
   * - Admin DisplayName: ms-Exch-Archive-Warn-Quota
   * - Description: ms-Exch-Archive-Warn-Quota
   * - ldapDisplayName: msExchArchiveWarnQuota
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.7000.102.51493
   */
  msExchArchiveWarnQuota = "msExchArchiveWarnQuota",
  /**
   * - Admin DisplayName: ms-Exch-Previous-Home-MDB
   * - Description: ms-Exch-Previous-Home-MDB
   * - ldapDisplayName: msExchPreviousHomeMDB
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51450
   */
  msExchPreviousHomeMdb = "msExchPreviousHomeMDB",
  /**
   * - Admin DisplayName: ms-Exch-Delegate-List-Link
   * - Description: ms-Exch-Delegate-List-Link
   * - ldapDisplayName: msExchDelegateListLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51530
   */
  msExchDelegateListLink = "msExchDelegateListLink",
  /**
   * - Admin DisplayName: ms-Exch-Dumpster-Quota
   * - Description: ms-Exch-Dumpster-Quota
   * - ldapDisplayName: msExchDumpsterQuota
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51508
   */
  msExchDumpsterQuota = "msExchDumpsterQuota",
  /**
   * - Admin DisplayName: ms-Exch-Dumpster-Warning-Quota
   * - Description: ms-Exch-Dumpster-Warning-Quota
   * - ldapDisplayName: msExchDumpsterWarningQuota
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51509
   */
  msExchDumpsterWarningQuota = "msExchDumpsterWarningQuota",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Blocked-Device-IDs
   * - Description: ms-Exch-Mobile-Blocked-Device-IDs
   * - ldapDisplayName: msExchMobileBlockedDeviceIDs
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51519
   */
  msExchMobileBlockedDeviceIDs = "msExchMobileBlockedDeviceIDs",
  /**
   * - Admin DisplayName: ms-Exch-MDB-Rules-Quota
   * - Description: ms-Exch-MDB-Rules-Quota
   * - ldapDisplayName: msExchMDBRulesQuota
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50413
   */
  msExchMdbRulesQuota = "msExchMDBRulesQuota",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-OAB-Virtual-Directories-Link
   * - Description: ms-Exch-Mailbox-OAB-Virtual-Directories-Link
   * - ldapDisplayName: msExchMailboxOABVirtualDirectoriesLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50511
   */
  msExchMailboxOabVirtualDirectoriesLink = "msExchMailboxOABVirtualDirectoriesLink",
  /**
   * - Admin DisplayName: ms-Exch-External-OOF-Options
   * - Description: ms-Exch-External-OOF-Options
   * - ldapDisplayName: msExchExternalOOFOptions
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50462
   */
  msExchExternalOofOptions = "msExchExternalOOFOptions",
  /**
   * - Admin DisplayName: ms-Exch-UM-Template-Link
   * - Description: ms-Exch-UM-Template-Link
   * - ldapDisplayName: msExchUMTemplateLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50367
   */
  msExchUmTemplateLink = "msExchUMTemplateLink",
  /**
   * - Admin DisplayName: ms-Exch-UM-Pin-Checksum
   * - Description: ms-Exch-UM-Pin-Checksum
   * - ldapDisplayName: msExchUMPinChecksum
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.50344
   */
  msExchUmPinChecksum = "msExchUMPinChecksum",
  /**
   * - Admin DisplayName: ms-Exch-UM-Operator-Number
   * - Description: ms-Exch-UM-Operator-Number
   * - ldapDisplayName: msExchUMOperatorNumber
   * - attributeSyntax: 2.5.5.6
   * - attributeID: 1.2.840.113556.1.4.7000.102.50343
   */
  msExchUmOperatorNumber = "msExchUMOperatorNumber",
  /**
   * - Admin DisplayName: ms-Exch-UM-Max-Greeting-Duration
   * - Description: ms-Exch-UM-Max-Greeting-Duration
   * - ldapDisplayName: msExchUMMaxGreetingDuration
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50337
   */
  msExchUmMaxGreetingDuration = "msExchUMMaxGreetingDuration",
  /**
   * - Admin DisplayName: ms-Exch-UM-Fax-Id
   * - Description: ms-Exch-UM-Fax-Id
   * - ldapDisplayName: msExchUMFaxId
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50362
   */
  msExchUmFaxId = "msExchUMFaxId",
  /**
   * - Admin DisplayName: ms-Exch-UM-Enabled-Flags
   * - Description: ms-Exch-UM-Enabled-Flags
   * - ldapDisplayName: msExchUMEnabledFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50335
   */
  msExchUmEnabledFlags = "msExchUMEnabledFlags",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Template-Link
   * - Description: ms-Exch-Mailbox-Template-Link
   * - ldapDisplayName: msExchMailboxTemplateLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50351
   */
  msExchMailboxTemplateLink = "msExchMailboxTemplateLink",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Allowed-Device-IDs
   * - Description: ms-Exch-Mobile-Allowed-Device-IDs
   * - ldapDisplayName: msExchMobileAllowedDeviceIDs
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50666
   */
  msExchMobileAllowedDeviceIDs = "msExchMobileAllowedDeviceIDs",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Debug-Logging
   * - Description: ms-Exch-Mobile-Debug-Logging
   * - ldapDisplayName: msExchMobileDebugLogging
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50667
   */
  msExchMobileDebugLogging = "msExchMobileDebugLogging",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Mailbox-Policy-Link
   * - Description: ms-Exch-Mobile-Mailbox-Policy-Link
   * - ldapDisplayName: msExchMobileMailboxPolicyLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50668
   */
  msExchMobileMailboxPolicyLink = "msExchMobileMailboxPolicyLink",
  /**
   * - Admin DisplayName: ms-Exch-ELC-Expiry-Suspension-End
   * - Description: ms-Exch-ELC-Expiry-Suspension-End
   * - ldapDisplayName: msExchELCExpirySuspensionEnd
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.50763
   */
  msExchElcExpirySuspensionEnd = "msExchELCExpirySuspensionEnd",
  /**
   * - Admin DisplayName: ms-Exch-ELC-Expiry-Suspension-Start
   * - Description: ms-Exch-ELC-Expiry-Suspension-Start
   * - ldapDisplayName: msExchELCExpirySuspensionStart
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.50762
   */
  msExchElcExpirySuspensionStart = "msExchELCExpirySuspensionStart",
  /**
   * - Admin DisplayName: ms-Exch-ELC-Mailbox-Flags
   * - Description: ms-Exch-ELC-Mailbox-Flags
   * - ldapDisplayName: msExchELCMailboxFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50761
   */
  msExchElcMailboxFlags = "msExchELCMailboxFlags",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Mailbox-Flags
   * - Description: ms-Exch-Mobile-Mailbox-Flags
   * - ldapDisplayName: msExchMobileMailboxFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50858
   */
  msExchMobileMailboxFlags = "msExchMobileMailboxFlags",
  /**
   * - Admin DisplayName: ms-Exch-UM-Audio-Codec
   * - Description: ms-Exch-UM-Audio-Codec
   * - ldapDisplayName: msExchUMAudioCodec
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50378
   */
  msExchUmAudioCodec = "msExchUMAudioCodec",
  /**
   * - Admin DisplayName: ms-Exch-UM-Server-Writable-Flags
   * - Description: ms-Exch-UM-Server-Writable-Flags
   * - ldapDisplayName: msExchUMServerWritableFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50850
   */
  msExchUmServerWritableFlags = "msExchUMServerWritableFlags",
  /**
   * - Admin DisplayName: ms-Exch-Max-Blocked-Senders
   * - Description: ms-Exch-Max-Blocked-Senders
   * - ldapDisplayName: msExchMaxBlockedSenders
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50878
   */
  msExchMaxBlockedSenders = "msExchMaxBlockedSenders",
  /**
   * - Admin DisplayName: ms-Exch-Max-Safe-Senders
   * - Description: ms-Exch-Max-Safe-Senders
   * - ldapDisplayName: msExchMaxSafeSenders
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50877
   */
  msExchMaxSafeSenders = "msExchMaxSafeSenders",
  /**
   * - Admin DisplayName: ms-Exch-UM-Enabled-Flags-2
   * - Description: ms-Exch-UM-Enabled-Flags-2
   * - ldapDisplayName: msExchUMEnabledFlags2
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.50905
   */
  msExchUmEnabledFlags2 = "msExchUMEnabledFlags2",
  /**
   * - Admin DisplayName: ms-Exch-Approval-Application-Link
   * - Description: ms-Exch-Approval-Application-Link
   * - ldapDisplayName: msExchApprovalApplicationLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50950
   */
  msExchApprovalApplicationLink = "msExchApprovalApplicationLink",
  /**
   * - Admin DisplayName: ms-Exch-Pf-Root-Url
   * - Description: ms-Exch-Pf-Root-Url
   * - ldapDisplayName: msExchPfRootUrl
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50086
   */
  msExchPfRootUrl = "msExchPfRootUrl",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Url
   * - Description: ms-Exch-Mailbox-Url
   * - ldapDisplayName: msExchMailboxUrl
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50085
   */
  msExchMailboxUrl = "msExchMailboxUrl",
  /**
   * - Admin DisplayName: ms-Exch-Use-OAB
   * - Description: ms-Exch-Use-OAB
   * - ldapDisplayName: msExchUseOAB
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.69
   */
  msExchUseOab = "msExchUseOAB",
  /**
   * - Admin DisplayName: ms-Exch-Mailbox-Guid
   * - Description: ms-Exch-Mailbox-Guid
   * - ldapDisplayName: msExchMailboxGuid
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.11058
   */
  msExchMailboxGuid = "msExchMailboxGuid",
  /**
   * - Admin DisplayName: ms-Exch-MDB-Use-Defaults
   * - Description: ms-Exch-MDB-Use-Defaults
   * - ldapDisplayName: mDBUseDefaults
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.2.309
   */
  mDbUseDefaults = "mDBUseDefaults",
  /**
   * - Admin DisplayName: ms-Exch-MDB-Storage-Quota
   * - Description: ms-Exch-MDB-Storage-Quota
   * - ldapDisplayName: mDBStorageQuota
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.266
   */
  mDbStorageQuota = "mDBStorageQuota",
  /**
   * - Admin DisplayName: ms-Exch-MDB-Over-Quota-Limit
   * - Description: ms-Exch-MDB-Over-Quota-Limit
   * - ldapDisplayName: mDBOverQuotaLimit
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.272
   */
  mDbOverQuotaLimit = "mDBOverQuotaLimit",
  /**
   * - Admin DisplayName: ms-Exch-MDB-Over-Hard-Quota-Limit
   * - Description: ms-Exch-MDB-Over-Hard-Quota-Limit
   * - ldapDisplayName: mDBOverHardQuotaLimit
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.11037
   */
  mDbOverHardQuotaLimit = "mDBOverHardQuotaLimit",
  /**
   * - Admin DisplayName: ms-Exch-Home-Server-Name
   * - Description: ms-Exch-Home-Server-Name
   * - ldapDisplayName: msExchHomeServerName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.47
   */
  msExchHomeServerName = "msExchHomeServerName",
  /**
   * - Admin DisplayName: ms-Exch-Home-MDB
   * - Description: ms-Exch-Home-MDB
   * - ldapDisplayName: homeMDB
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.244
   */
  homeMdb = "homeMDB",
  /**
   * - Admin DisplayName: ms-Exch-Deleted-Item-Flags
   * - Description: ms-Exch-Deleted-Item-Flags
   * - ldapDisplayName: deletedItemFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.106
   */
  deletedItemFlags = "deletedItemFlags",
  /**
   * - Admin DisplayName: ms-Exch-AutoReply
   * - Description: ms-Exch-AutoReply
   * - ldapDisplayName: autoReply
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.2.286
   */
  autoReply = "autoReply",
  /**
   * - Admin DisplayName: ms-Exch-Multi-Mailbox-Locations-Link
   * - Description: ms-Exch-Multi-Mailbox-Locations-Link
   * - ldapDisplayName: msExchMultiMailboxLocationsLink
   * - attributeSyntax: 2.5.5.14
   * - attributeID: 1.2.840.113556.1.4.7000.102.52144
   */
  msExchMultiMailboxLocationsLink = "msExchMultiMailboxLocationsLink",
  /**
   * - Admin DisplayName: ms-Exch-Multi-Mailbox-GUIDs
   * - Description: ms-Exch-Multi-Mailbox-GUIDs
   * - ldapDisplayName: msExchMultiMailboxGUIDs
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52145
   */
  msExchMultiMailboxGuiDs = "msExchMultiMailboxGUIDs",
  /**
   * - Admin DisplayName: ms-Exch-Tenant-Country
   * - Description: ms-Exch-Tenant-Country
   * - ldapDisplayName: msExchTenantCountry
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52130
   */
  msExchTenantCountry = "msExchTenantCountry",
  /**
   * - Admin DisplayName: ms-Exch-Provisioning-Tags
   * - Description: ms-Exch-Provisioning-Tags
   * - ldapDisplayName: msExchProvisioningTags
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.52126
   */
  msExchProvisioningTags = "msExchProvisioningTags",
  /**
   * - Admin DisplayName: ms-Exch-Correlation-Id
   * - Description: ms-Exch-Correlation-Id
   * - ldapDisplayName: msExchCorrelationId
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.52065
   */
  msExchCorrelationId = "msExchCorrelationId",
  /**
   * - Admin DisplayName: ms-Exch-Canary-Data-2
   * - Description: ms-Exch-Canary-Data-2
   * - ldapDisplayName: msExchCanaryData2
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.52053
   */
  msExchCanaryData2 = "msExchCanaryData2",
  /**
   * - Admin DisplayName: ms-Exch-Canary-Data-1
   * - Description: ms-Exch-Canary-Data-1
   * - ldapDisplayName: msExchCanaryData1
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.52052
   */
  msExchCanaryData1 = "msExchCanaryData1",
  /**
   * - Admin DisplayName: ms-Exch-Canary-Data-0
   * - Description: ms-Exch-Canary-Data-0
   * - ldapDisplayName: msExchCanaryData0
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.52051
   */
  msExchCanaryData0 = "msExchCanaryData0",
  /**
   * - Admin DisplayName: ms-Exch-Forest-Mode-Flag
   * - Description: ms-Exch-Forest-Mode-Flag
   * - ldapDisplayName: msExchForestModeFlag
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51796
   */
  msExchForestModeFlag = "msExchForestModeFlag",
  /**
   * - Admin DisplayName: ms-Exch-Default-Public-Folder-Mailbox
   * - Description: ms-Exch-Default-Public-Folder-Mailbox
   * - ldapDisplayName: msExchDefaultPublicFolderMailbox
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51805
   */
  msExchDefaultPublicFolderMailbox = "msExchDefaultPublicFolderMailbox",
  /**
   * - Admin DisplayName: ms-Exch-HAB-Root-Department-Link
   * - Description: ms-Exch-HAB-Root-Department-Link
   * - ldapDisplayName: msExchHABRootDepartmentLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50824
   */
  msExchHabRootDepartmentLink = "msExchHABRootDepartmentLink",
  /**
   * - Admin DisplayName: ms-Exch-Edge-Sync-Config-Flags
   * - Description: ms-Exch-Edge-Sync-Config-Flags
   * - ldapDisplayName: msExchEdgeSyncConfigFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51786
   */
  msExchEdgeSyncConfigFlags = "msExchEdgeSyncConfigFlags",
  /**
   * - Admin DisplayName: ms-Exch-Dirsync-Status-Ack
   * - Description: ms-Exch-Dirsync-Status-Ack
   * - ldapDisplayName: msExchDirsyncStatusAck
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51788
   */
  msExchDirsyncStatusAck = "msExchDirsyncStatusAck",
  /**
   * - Admin DisplayName: ms-Exch-Dirsync-Authority-Metadata
   * - Description: ms-Exch-Dirsync-Authority-Metadata
   * - ldapDisplayName: msExchDirsyncAuthorityMetadata
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51789
   */
  msExchDirsyncAuthorityMetadata = "msExchDirsyncAuthorityMetadata",
  /**
   * - Admin DisplayName: ms-Exch-Is-MSO-Dirsynced
   * - Description: ms-Exch-Is-MSO-Dirsynced
   * - ldapDisplayName: msExchIsMSODirsynced
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.51718
   */
  msExchIsMsoDirsynced = "msExchIsMSODirsynced",
  /**
   * - Admin DisplayName: ms-Exch-Last-Exchange-Changed-Time
   * - Description: ms-Exch-Last-Exchange-Changed-Time
   * - ldapDisplayName: msExchLastExchangeChangedTime
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.7000.102.51608
   */
  msExchLastExchangeChangedTime = "msExchLastExchangeChangedTime",
  /**
   * - Admin DisplayName: ms-Exch-External-Directory-Object-Id
   * - Description: ms-Exch-External-Directory-Object-Id
   * - ldapDisplayName: msExchExternalDirectoryObjectId
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51610
   */
  msExchExternalDirectoryObjectId = "msExchExternalDirectoryObjectId",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Mobile
   * - Description: ms-Exch-Shadow-Mobile
   * - ldapDisplayName: msExchShadowMobile
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51699
   */
  msExchShadowMobile = "msExchShadowMobile",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Mail-Nickname
   * - Description: ms-Exch-Shadow-Mail-Nickname
   * - ldapDisplayName: msExchShadowMailNickname
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51698
   */
  msExchShadowMailNickname = "msExchShadowMailNickname",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-L
   * - Description: ms-Exch-Shadow-L
   * - ldapDisplayName: msExchShadowL
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51697
   */
  msExchShadowL = "msExchShadowL",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Info
   * - Description: ms-Exch-Shadow-Info
   * - ldapDisplayName: msExchShadowInfo
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51696
   */
  msExchShadowInfo = "msExchShadowInfo",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Home-Phone
   * - Description: ms-Exch-Shadow-Home-Phone
   * - ldapDisplayName: msExchShadowHomePhone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51695
   */
  msExchShadowHomePhone = "msExchShadowHomePhone",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Given-Name
   * - Description: ms-Exch-Shadow-Given-Name
   * - ldapDisplayName: msExchShadowGivenName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51694
   */
  msExchShadowGivenName = "msExchShadowGivenName",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Facsimile-Telephone-Number
   * - Description: ms-Exch-Shadow-Facsimile-Telephone-Number
   * - ldapDisplayName: msExchShadowFacsimileTelephoneNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51693
   */
  msExchShadowFacsimileTelephoneNumber = "msExchShadowFacsimileTelephoneNumber",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Display-Name
   * - Description: ms-Exch-Shadow-Display-Name
   * - ldapDisplayName: msExchShadowDisplayName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51692
   */
  msExchShadowDisplayName = "msExchShadowDisplayName",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Department
   * - Description: ms-Exch-Shadow-Department
   * - ldapDisplayName: msExchShadowDepartment
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51691
   */
  msExchShadowDepartment = "msExchShadowDepartment",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Country-Code
   * - Description: ms-Exch-Shadow-Country-Code
   * - ldapDisplayName: msExchShadowCountryCode
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51690
   */
  msExchShadowCountryCode = "msExchShadowCountryCode",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Co
   * - Description: ms-Exch-Shadow-Co
   * - ldapDisplayName: msExchShadowCo
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51689
   */
  msExchShadowCo = "msExchShadowCo",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-C
   * - Description: ms-Exch-Shadow-C
   * - ldapDisplayName: msExchShadowC
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51688
   */
  msExchShadowC = "msExchShadowC",
  /**
   * - Admin DisplayName: ms-Exch-On-Premise-Object-Guid
   * - Description: ms-Exch-On-Premise-Object-Guid
   * - ldapDisplayName: msExchOnPremiseObjectGuid
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.51717
   */
  msExchOnPremiseObjectGuid = "msExchOnPremiseObjectGuid",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Assistant-Name
   * - Description: ms-Exch-Shadow-Assistant-Name
   * - ldapDisplayName: msExchShadowAssistantName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51700
   */
  msExchShadowAssistantName = "msExchShadowAssistantName",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Proxy-Addresses
   * - Description: ms-Exch-Shadow-Proxy-Addresses
   * - ldapDisplayName: msExchShadowProxyAddresses
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51707
   */
  msExchShadowProxyAddresses = "msExchShadowProxyAddresses",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Postal-Code
   * - Description: ms-Exch-Shadow-Postal-Code
   * - ldapDisplayName: msExchShadowPostalCode
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51706
   */
  msExchShadowPostalCode = "msExchShadowPostalCode",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Physical-Delivery-Office-Name
   * - Description: ms-Exch-Shadow-Physical-Delivery-Office-Name
   * - ldapDisplayName: msExchShadowPhysicalDeliveryOfficeName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51705
   */
  msExchShadowPhysicalDeliveryOfficeName = "msExchShadowPhysicalDeliveryOfficeName",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Pager
   * - Description: ms-Exch-Shadow-Pager
   * - ldapDisplayName: msExchShadowPager
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51704
   */
  msExchShadowPager = "msExchShadowPager",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Other-Telephone
   * - Description: ms-Exch-Shadow-Other-Telephone
   * - ldapDisplayName: msExchShadowOtherTelephone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51703
   */
  msExchShadowOtherTelephone = "msExchShadowOtherTelephone",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Other-Home-Phone
   * - Description: ms-Exch-Shadow-Other-Home-Phone
   * - ldapDisplayName: msExchShadowOtherHomePhone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51702
   */
  msExchShadowOtherHomePhone = "msExchShadowOtherHomePhone",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Other-Facsimile-Telephone
   * - Description: ms-Exch-Shadow-Other-Facsimile-Telephone
   * - ldapDisplayName: msExchShadowOtherFacsimileTelephone
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51701
   */
  msExchShadowOtherFacsimileTelephone = "msExchShadowOtherFacsimileTelephone",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Sn
   * - Description: ms-Exch-Shadow-Sn
   * - ldapDisplayName: msExchShadowSn
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51708
   */
  msExchShadowSn = "msExchShadowSn",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-St
   * - Description: ms-Exch-Shadow-St
   * - ldapDisplayName: msExchShadowSt
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51709
   */
  msExchShadowSt = "msExchShadowSt",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Street-Address
   * - Description: ms-Exch-Shadow-Street-Address
   * - ldapDisplayName: msExchShadowStreetAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51710
   */
  msExchShadowStreetAddress = "msExchShadowStreetAddress",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Telephone-Assistant
   * - Description: ms-Exch-Shadow-Telephone-Assistant
   * - ldapDisplayName: msExchShadowTelephoneAssistant
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51711
   */
  msExchShadowTelephoneAssistant = "msExchShadowTelephoneAssistant",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Telephone-Number
   * - Description: ms-Exch-Shadow-Telephone-Number
   * - ldapDisplayName: msExchShadowTelephoneNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51712
   */
  msExchShadowTelephoneNumber = "msExchShadowTelephoneNumber",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Title
   * - Description: ms-Exch-Shadow-Title
   * - ldapDisplayName: msExchShadowTitle
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51713
   */
  msExchShadowTitle = "msExchShadowTitle",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Windows-Live-ID
   * - Description: ms-Exch-Shadow-Windows-Live-ID
   * - ldapDisplayName: msExchShadowWindowsLiveID
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51714
   */
  msExchShadowWindowsLiveId = "msExchShadowWindowsLiveID",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-WWW-Home-Page
   * - Description: ms-Exch-Shadow-WWW-Home-Page
   * - ldapDisplayName: msExchShadowWWWHomePage
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51715
   */
  msExchShadowWwwHomePage = "msExchShadowWWWHomePage",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Manager-Link
   * - Description: ms-Exch-Shadow-Manager-Link
   * - ldapDisplayName: msExchShadowManagerLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51747
   */
  msExchShadowManagerLink = "msExchShadowManagerLink",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Company
   * - Description: ms-Exch-Shadow-Company
   * - ldapDisplayName: msExchShadowCompany
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51761
   */
  msExchShadowCompany = "msExchShadowCompany",
  /**
   * - Admin DisplayName: ms-Exch-Shadow-Initials
   * - Description: ms-Exch-Shadow-Initials
   * - ldapDisplayName: msExchShadowInitials
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51762
   */
  msExchShadowInitials = "msExchShadowInitials",
  /**
   * - Admin DisplayName: ms-Exch-Setup-Status
   * - Description: ms-Exch-Setup-Status
   * - ldapDisplayName: msExchSetupStatus
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51061
   */
  msExchSetupStatus = "msExchSetupStatus",
  /**
   * - Admin DisplayName: ms-Exch-Server-Association-Link
   * - Description: ms-Exch-Server-Association-Link
   * - ldapDisplayName: msExchServerAssociationLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.51247
   */
  msExchServerAssociationLink = "msExchServerAssociationLink",
  /**
   * - Admin DisplayName: ms-Exch-Object-Count-Quota
   * - Description: ms-Exch-Object-Count-Quota
   * - ldapDisplayName: msExchObjectCountQuota
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.51559
   */
  msExchObjectCountQuota = "msExchObjectCountQuota",
  /**
   * - Admin DisplayName: ms-Exch-Content-Conversion-Settings
   * - Description: ms-Exch-Content-Conversion-Settings
   * - ldapDisplayName: msExchContentConversionSettings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51490
   */
  msExchContentConversionSettings = "msExchContentConversionSettings",
  /**
   * - Admin DisplayName: ms-Exch-IMAP4-Settings
   * - Description: ms-Exch-IMAP4-Settings
   * - ldapDisplayName: msExchIMAP4Settings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51485
   */
  msExchImap4Settings = "msExchIMAP4Settings",
  /**
   * - Admin DisplayName: ms-Exch-Management-Settings
   * - Description: ms-Exch-Management-Settings
   * - ldapDisplayName: msExchManagementSettings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51491
   */
  msExchManagementSettings = "msExchManagementSettings",
  /**
   * - Admin DisplayName: ms-Exch-Mobile-Settings
   * - Description: ms-Exch-Mobile-Settings
   * - ldapDisplayName: msExchMobileSettings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51489
   */
  msExchMobileSettings = "msExchMobileSettings",
  /**
   * - Admin DisplayName: ms-Exch-OWA-Settings
   * - Description: ms-Exch-OWA-Settings
   * - ldapDisplayName: msExchOWASettings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51488
   */
  msExchOwaSettings = "msExchOWASettings",
  /**
   * - Admin DisplayName: ms-Exch-POP3-Settings
   * - Description: ms-Exch-POP3-Settings
   * - ldapDisplayName: msExchPOP3Settings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51484
   */
  msExchPop3Settings = "msExchPOP3Settings",
  /**
   * - Admin DisplayName: ms-Exch-Transport-Inbound-Settings
   * - Description: ms-Exch-Transport-Inbound-Settings
   * - ldapDisplayName: msExchTransportInboundSettings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51486
   */
  msExchTransportInboundSettings = "msExchTransportInboundSettings",
  /**
   * - Admin DisplayName: ms-Exch-Transport-Outbound-Settings
   * - Description: ms-Exch-Transport-Outbound-Settings
   * - ldapDisplayName: msExchTransportOutboundSettings
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.51487
   */
  msExchTransportOutboundSettings = "msExchTransportOutboundSettings",
  /**
   * - Admin DisplayName: ms-Exch-Version
   * - Description: ms-Exch-Version
   * - ldapDisplayName: msExchVersion
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.7000.102.50853
   */
  msExchVersion = "msExchVersion",
  /**
   * - Admin DisplayName: ms-Exch-Configuration-Unit-BL
   * - Description: ms-Exch-Configuration-Unit-BL
   * - ldapDisplayName: msExchConfigurationUnitBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50919
   */
  msExchConfigurationUnitBl = "msExchConfigurationUnitBL",
  /**
   * - Admin DisplayName: ms-Exch-CU
   * - Description: ms-Exch-CU
   * - ldapDisplayName: msExchCU
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50920
   */
  msExchCu = "msExchCU",
  /**
   * - Admin DisplayName: ms-Exch-OU-Root
   * - Description: ms-Exch-OU-Root
   * - ldapDisplayName: msExchOURoot
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.50921
   */
  msExchOuRoot = "msExchOURoot",
  /**
   * - Admin DisplayName: ms-Exch-Edge-Sync-Cookies
   * - Description: ms-Exch-Edge-Sync-Cookies
   * - ldapDisplayName: msExchEdgeSyncCookies
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50960
   */
  msExchEdgeSyncCookies = "msExchEdgeSyncCookies",
  /**
   * - Admin DisplayName: ms-Exch-Edge-Sync-Source-Guid
   * - Description: ms-Exch-Edge-Sync-Source-Guid
   * - ldapDisplayName: msExchEdgeSyncSourceGuid
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.50962
   */
  msExchEdgeSyncSourceGuid = "msExchEdgeSyncSourceGuid",
  /**
   * - Admin DisplayName: ms-Exch-Recipient-Validator-Cookies
   * - Description: ms-Exch-Recipient-Validator-Cookies
   * - ldapDisplayName: msExchRecipientValidatorCookies
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50961
   */
  msExchRecipientValidatorCookies = "msExchRecipientValidatorCookies",
  /**
   * - Admin DisplayName: ms-Exch-AL-Object-Version
   * - Description: ms-Exch-AL-Object-Version
   * - ldapDisplayName: msExchALObjectVersion
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.59
   */
  msExchAlObjectVersion = "msExchALObjectVersion",
  /**
   * - Admin DisplayName: ms-Exch-Heuristics
   * - Description: ms-Exch-Heuristics
   * - ldapDisplayName: heuristics
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.452
   */
  heuristics = "heuristics",
  /**
   * - Admin DisplayName: ms-Exch-Inconsistent-State
   * - Description: ms-Exch-Inconsistent-State
   * - ldapDisplayName: msExchInconsistentState
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.96
   */
  msExchInconsistentState = "msExchInconsistentState",
  /**
   * - Admin DisplayName: ms-Exch-Unmerged-Atts-Pt
   * - Description: ms-Exch-Unmerged-Atts-Pt
   * - ldapDisplayName: msExchUnmergedAttsPt
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.90
   */
  msExchUnmergedAttsPt = "msExchUnmergedAttsPt",
  /**
   * - Admin DisplayName: ms-Exch-Unmerged-Atts
   * - Description: ms-Exch-Unmerged-Atts
   * - ldapDisplayName: unmergedAtts
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.48
   */
  unmergedAtts = "unmergedAtts",
  /**
   * - Admin DisplayName: ms-Exch-Replication-Signature
   * - Description: ms-Exch-Replication-Signature
   * - ldapDisplayName: replicationSignature
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.52
   */
  replicationSignature = "replicationSignature",
  /**
   * - Admin DisplayName: ms-Exch-Replicated-Object-Version
   * - Description: ms-Exch-Replicated-Object-Version
   * - ldapDisplayName: replicatedObjectVersion
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.2.604
   */
  replicatedObjectVersion = "replicatedObjectVersion",
  /**
   * - Admin DisplayName: ms-Exch-Hide-From-Address-Lists
   * - Description: ms-Exch-Hide-From-Address-Lists
   * - ldapDisplayName: msExchHideFromAddressLists
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.7000.102.73
   */
  msExchHideFromAddressLists = "msExchHideFromAddressLists",
  /**
   * - Admin DisplayName: ms-Exch-ADC-Global-Names
   * - Description: ms-Exch-ADC-Global-Names
   * - ldapDisplayName: msExchADCGlobalNames
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.63
   */
  msExchAdcGlobalNames = "msExchADCGlobalNames",
  /**
   * - Admin DisplayName: ms-Exch-Voice-Mailbox-ID
   * - Description: ms-Exch-Voice-Mailbox-ID
   * - ldapDisplayName: msExchVoiceMailboxID
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.17019
   */
  msExchVoiceMailboxId = "msExchVoiceMailboxID",
  /**
   * - Admin DisplayName: ms-Exch-TUI-Volume
   * - Description: ms-Exch-TUI-Volume
   * - ldapDisplayName: msExchTUIVolume
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.17026
   */
  msExchTuiVolume = "msExchTUIVolume",
  /**
   * - Admin DisplayName: ms-Exch-TUI-Speed
   * - Description: ms-Exch-TUI-Speed
   * - ldapDisplayName: msExchTUISpeed
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.7000.102.17027
   */
  msExchTuiSpeed = "msExchTUISpeed",
  /**
   * - Admin DisplayName: ms-Exch-TUI-Password
   * - Description: ms-Exch-TUI-Password
   * - ldapDisplayName: msExchTUIPassword
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.17025
   */
  msExchTuiPassword = "msExchTUIPassword",
  /**
   * - Admin DisplayName: ms-Exch-Supported-Algorithms
   * - Description: ms-Exch-Supported-Algorithms
   * - ldapDisplayName: supportedAlgorithms
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.597
   */
  supportedAlgorithms = "supportedAlgorithms",
  /**
   * - Admin DisplayName: ms-Exch-Attribute-Certificate
   * - Description: ms-Exch-Attribute-Certificate
   * - ldapDisplayName: attributeCertificate
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.2.587
   */
  attributeCertificate = "attributeCertificate",
  /**
   * - Admin DisplayName: ms-Exch-IM-Virtual-Server
   * - Description: ms-Exch-IM-Virtual-Server
   * - ldapDisplayName: msExchIMVirtualServer
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.7037
   */
  msExchImVirtualServer = "msExchIMVirtualServer",
  /**
   * - Admin DisplayName: ms-Exch-IM-Address
   * - Description: ms-Exch-IM-Address
   * - ldapDisplayName: msExchIMAddress
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.7000.102.7038
   */
  msExchImAddress = "msExchIMAddress",
  /**
   * - Admin DisplayName: ms-Exch-IM-Physical-URL
   * - Description: ms-Exch-IM-Physical-URL
   * - ldapDisplayName: msExchIMPhysicalURL
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.7000.102.7036
   */
  msExchImPhysicalUrl = "msExchIMPhysicalURL",
  /**
   * - Admin DisplayName: ms-Exch-IM-Meta-Physical-URL
   * - Description: ms-Exch-IM-Meta-Physical-URL
   * - ldapDisplayName: msExchIMMetaPhysicalURL
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.7000.102.7035
   */
  msExchImMetaPhysicalUrl = "msExchIMMetaPhysicalURL",
  /**
   * - Admin DisplayName: ms-Exch-IM-ACL
   * - Description: ms-Exch-IM-ACL
   * - ldapDisplayName: msExchIMACL
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.7000.102.7031
   */
  msExchImacl = "msExchIMACL",
  /**
   * - Admin DisplayName: ms-Exch-Oma-Admin-Wireless-Enable
   * - Description: ms-Exch-Oma-Admin-Wireless-Enable
   * - ldapDisplayName: msExchOmaAdminWirelessEnable
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.6.20.1.124
   */
  msExchOmaAdminWirelessEnable = "msExchOmaAdminWirelessEnable",
  /**
   * - Admin DisplayName: ms-Exch-Oma-Admin-Extended-Settings
   * - Description: ms-Exch-Oma-Admin-Extended-Settings
   * - ldapDisplayName: msExchOmaAdminExtendedSettings
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.6.20.1.126
   */
  msExchOmaAdminExtendedSettings = "msExchOmaAdminExtendedSettings",
  /**
   * - Admin DisplayName: uid
   * - Description: A user ID.
   * - ldapDisplayName: uid
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 0.9.2342.19200300.100.1.1
   */
  uid = "uid",
  /**
   * - Admin DisplayName: shadowLastChange
   * - Description: Last change of shadow information.
   * - ldapDisplayName: shadowLastChange
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.5
   */
  shadowLastChange = "shadowLastChange",
  /**
   * - Admin DisplayName: shadowMin
   * - Description: Minimum number of days between shadow changes.
   * - ldapDisplayName: shadowMin
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.6
   */
  shadowMin = "shadowMin",
  /**
   * - Admin DisplayName: shadowMax
   * - Description: Maximum number of days password is valid.
   * - ldapDisplayName: shadowMax
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.7
   */
  shadowMax = "shadowMax",
  /**
   * - Admin DisplayName: shadowWarning
   * - Description: Number of days before password expiry to warn user
   * - ldapDisplayName: shadowWarning
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.8
   */
  shadowWarning = "shadowWarning",
  /**
   * - Admin DisplayName: shadowInactive
   * - Description: Number of days before password expiry to warn user
   * - ldapDisplayName: shadowInactive
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.9
   */
  shadowInactive = "shadowInactive",
  /**
   * - Admin DisplayName: shadowExpire
   * - Description: Absolute date to expire account
   * - ldapDisplayName: shadowExpire
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.10
   */
  shadowExpire = "shadowExpire",
  /**
   * - Admin DisplayName: shadowFlag
   * - Description: This is a part of the shadow map used to store the flag value.
   * - ldapDisplayName: shadowFlag
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.11
   */
  shadowFlag = "shadowFlag",
  /**
   * - Admin DisplayName: uidNumber
   * - Description: An integer uniquely identifying a user in an administrative domain (RFC 2307)
   * - ldapDisplayName: uidNumber
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.0
   */
  uidNumber = "uidNumber",
  /**
   * - Admin DisplayName: gidNumber
   * - Description: An integer uniquely identifying a group in an administrative domain (RFC 2307)
   * - ldapDisplayName: gidNumber
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.3.6.1.1.1.1.1
   */
  gidNumber = "gidNumber",
  /**
   * - Admin DisplayName: unixHomeDirectory
   * - Description: The absolute path to the home directory (RFC 2307)
   * - ldapDisplayName: unixHomeDirectory
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.3.6.1.1.1.1.3
   */
  unixHomeDirectory = "unixHomeDirectory",
  /**
   * - Admin DisplayName: Home-Directory
   * - Description: Home-Directory
   * - ldapDisplayName: homeDirectory
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.44
   */
  homeDirectory = "homeDirectory",
  /**
   * - Admin DisplayName: unixUserPassword
   * - Description: userPassword compatible with Unix system.
   * - ldapDisplayName: unixUserPassword
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.1910
   */
  unixUserPassword = "unixUserPassword",
  /**
   * - Admin DisplayName: loginShell
   * - Description: The path to the login shell (RFC 2307)
   * - ldapDisplayName: loginShell
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.3.6.1.1.1.1.4
   */
  loginShell = "loginShell",
  /**
   * - Admin DisplayName: gecos
   * - Description: The GECOS field; the common name (RFC 2307)
   * - ldapDisplayName: gecos
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.3.6.1.1.1.1.2
   */
  gecos = "gecos",
  /**
   * - Admin DisplayName: msRTCSIP-UserPolicy
   * - Description: msRTCSIP-UserPolicy
   * - ldapDisplayName: msRTCSIP-UserPolicy
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.6.24.1.132
   */
  msRtcsipUserPolicy = "msRTCSIP-UserPolicy",
  /**
   * - Admin DisplayName: msRTCSIP-PrimaryUserAddress
   * - Description: msRTCSIP-PrimaryUserAddress
   * - ldapDisplayName: msRTCSIP-PrimaryUserAddress
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.6.24.1.1
   */
  msRtcsipPrimaryUserAddress = "msRTCSIP-PrimaryUserAddress",
  /**
   * - Admin DisplayName: msRTCSIP-UserEnabled
   * - Description: msRTCSIP-UserEnabled
   * - ldapDisplayName: msRTCSIP-UserEnabled
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.6.24.1.6
   */
  msRtcsipUserEnabled = "msRTCSIP-UserEnabled",
  /**
   * - Admin DisplayName: msRTCSIP-TargetHomeServer
   * - Description: msRTCSIP-TargetHomeServer
   * - ldapDisplayName: msRTCSIP-TargetHomeServer
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.6.24.1.47
   */
  msRtcsipTargetHomeServer = "msRTCSIP-TargetHomeServer",
  /**
   * - Admin DisplayName: msRTCSIP-OriginatorSid
   * - Description: msRTCSIP-OriginatorSid
   * - ldapDisplayName: msRTCSIP-OriginatorSid
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.6.24.1.50
   */
  msRtcsipOriginatorSid = "msRTCSIP-OriginatorSid",
  /**
   * - Admin DisplayName: msRTCSIP-PrimaryHomeServer
   * - Description: msRTCSIP-PrimaryHomeServer
   * - ldapDisplayName: msRTCSIP-PrimaryHomeServer
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.6.24.1.57
   */
  msRtcsipPrimaryHomeServer = "msRTCSIP-PrimaryHomeServer",
  /**
   * - Admin DisplayName: msRTCSIP-UserExtension
   * - Description: msRTCSIP-UserExtension
   * - ldapDisplayName: msRTCSIP-UserExtension
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.6.24.1.63
   */
  msRtcsipUserExtension = "msRTCSIP-UserExtension",
  /**
   * - Admin DisplayName: msRTCSIP-FederationEnabled
   * - Description: msRTCSIP-FederationEnabled
   * - ldapDisplayName: msRTCSIP-FederationEnabled
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.6.24.1.67
   */
  msRtcsipFederationEnabled = "msRTCSIP-FederationEnabled",
  /**
   * - Admin DisplayName: msRTCSIP-InternetAccessEnabled
   * - Description: msRTCSIP-InternetAccessEnabled
   * - ldapDisplayName: msRTCSIP-InternetAccessEnabled
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.6.24.1.68
   */
  msRtcsipInternetAccessEnabled = "msRTCSIP-InternetAccessEnabled",
  /**
   * - Admin DisplayName: msRTCSIP-ArchivingEnabled
   * - Description: msRTCSIP-ArchivingEnabled
   * - ldapDisplayName: msRTCSIP-ArchivingEnabled
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.6.24.1.80
   */
  msRtcsipArchivingEnabled = "msRTCSIP-ArchivingEnabled",
  /**
   * - Admin DisplayName: msRTCSIP-OptionFlags
   * - Description: msRTCSIP-OptionFlags
   * - ldapDisplayName: msRTCSIP-OptionFlags
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.6.24.1.87
   */
  msRtcsipOptionFlags = "msRTCSIP-OptionFlags",
  /**
   * - Admin DisplayName: msRTCSIP-Line
   * - Description: msRTCSIP-Line
   * - ldapDisplayName: msRTCSIP-Line
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.6.24.1.88
   */
  msRtcsipLine = "msRTCSIP-Line",
  /**
   * - Admin DisplayName: msRTCSIP-LineServer
   * - Description: msRTCSIP-LineServer
   * - ldapDisplayName: msRTCSIP-LineServer
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.6.24.1.89
   */
  msRtcsipLineServer = "msRTCSIP-LineServer",
  /**
   * - Admin DisplayName: ms-DS-Source-Object-DN
   * - Description: The string representation of the DN of the object in another forest that corresponds to this object.
   * - ldapDisplayName: msDS-SourceObjectDN
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1879
   */
  msDsSourceObjectDn = "msDS-SourceObjectDN",
  /**
   * - Admin DisplayName: msSFU-30-Name
   * - Description: stores the name of a map
   * - ldapDisplayName: msSFU30Name
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.6.18.1.309
   */
  msSfu30Name = "msSFU30Name",
  /**
   * - Admin DisplayName: msSFU-30-Nis-Domain
   * - Description: This attribute is used to store the NIS domain
   * - ldapDisplayName: msSFU30NisDomain
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.6.18.1.339
   */
  msSfu30NisDomain = "msSFU30NisDomain",
  /**
   * - Admin DisplayName: ms-Exch-Query-Base-DN
   * - Description: ms-Exch-Query-Base-DN
   * - ldapDisplayName: msExchQueryBaseDN
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.15008
   */
  msExchQueryBaseDn = "msExchQueryBaseDN",
  /**
   * - Admin DisplayName: ms-Exch-Controlling-Zone
   * - Description: ms-Exch-Controlling-Zone
   * - ldapDisplayName: msExchControllingZone
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.9026
   */
  msExchControllingZone = "msExchControllingZone",
  /**
   * - Admin DisplayName: ms-Exch-Resource-GUID
   * - Description: ms-Exch-Resource-GUID
   * - ldapDisplayName: msExchResourceGUID
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.9001
   */
  msExchResourceGuid = "msExchResourceGUID",
  /**
   * - Admin DisplayName: ms-Exch-Resource-Properties
   * - Description: ms-Exch-Resource-Properties
   * - ldapDisplayName: msExchResourceProperties
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.9025
   */
  msExchResourceProperties = "msExchResourceProperties",
  /**
   * - Admin DisplayName: ms-Exch-Conference-Mailbox-BL
   * - Description: ms-Exch-Conference-Mailbox-BL
   * - ldapDisplayName: msExchConferenceMailboxBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.7000.102.9030
   */
  msExchConferenceMailboxBl = "msExchConferenceMailboxBL",
  /**
   * - Admin DisplayName: ms-Exch-KM-Server
   * - Description: ms-Exch-KM-Server
   * - ldapDisplayName: kMServer
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.2.440
   */
  kMServer = "kMServer",
  /**
   * - Admin DisplayName: ms-Exch-IMAP-OWA-URL-Prefix-Override
   * - Description: ms-Exch-IMAP-OWA-URL-Prefix-Override
   * - ldapDisplayName: msExchIMAPOWAURLPrefixOverride
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50213
   */
  msExchImapowaurlPrefixOverride = "msExchIMAPOWAURLPrefixOverride",
  /**
   * - Admin DisplayName: ms-Exch-Originating-Forest
   * - Description: ms-Exch-Originating-Forest
   * - ldapDisplayName: msExchOriginatingForest
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.7000.102.50300
   */
  msExchOriginatingForest = "msExchOriginatingForest",
  /**
   * - Admin DisplayName: x500uniqueIdentifier
   * - Description: Used to distinguish between objects when a distinguished name has been reused.  This is a different attribute type from both the "uid" and "uniqueIdentifier" types.
   * - ldapDisplayName: x500uniqueIdentifier
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.5.4.45
   */
  x500uniqueIdentifier = "x500uniqueIdentifier",
  /**
   * - Admin DisplayName: userPKCS12
   * - Description: PKCS #12 PFX PDU for exchange of personal identity information.
   * - ldapDisplayName: userPKCS12
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 2.16.840.1.113730.3.1.216
   */
  userPkcs12 = "userPKCS12",
  /**
   * - Admin DisplayName: roomNumber
   * - Description: The room number of an object.
   * - ldapDisplayName: roomNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 0.9.2342.19200300.100.1.6
   */
  roomNumber = "roomNumber",
  /**
   * - Admin DisplayName: preferredLanguage
   * - Description: The preferred written or spoken language for a person.
   * - ldapDisplayName: preferredLanguage
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.16.840.1.113730.3.1.39
   */
  preferredLanguage = "preferredLanguage",
  /**
   * - Admin DisplayName: photo
   * - Description: An object encoded in G3 fax as explained in recommendation T.4, with an ASN.1 wrapper to make it compatible with an X.400 BodyPart as defined in X.420.
   * - ldapDisplayName: photo
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 0.9.2342.19200300.100.1.7
   */
  photo = "photo",
  /**
   * - Admin DisplayName: jpegPhoto
   * - Description: Used to store one or more images of a person using the JPEG File Interchange Format [JFIF].
   * - ldapDisplayName: jpegPhoto
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 0.9.2342.19200300.100.1.60
   */
  jpegPhoto = "jpegPhoto",
  /**
   * - Admin DisplayName: departmentNumber
   * - Description: Identifies a department within an organization.
   * - ldapDisplayName: departmentNumber
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.16.840.1.113730.3.1.2
   */
  departmentNumber = "departmentNumber",
  /**
   * - Admin DisplayName: carLicense
   * - Description: Vehicle license or registration plate.
   * - ldapDisplayName: carLicense
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.16.840.1.113730.3.1.1
   */
  carLicense = "carLicense",
  /**
   * - Admin DisplayName: audio
   * - Description: The Audio attribute type allows the storing of sounds in the Directory.
   * - ldapDisplayName: audio
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 0.9.2342.19200300.100.1.55
   */
  audio = "audio",
  /**
   * - Admin DisplayName: ms-DS-Key-Credential-Link
   * - Description: Contains key material and usage.
   * - ldapDisplayName: msDS-KeyCredentialLink
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.4.2328
   */
  msDsKeyCredentialLink = "msDS-KeyCredentialLink",
  /**
   * - Admin DisplayName: msDS-KeyPrincipalBL
   * - Description: This attribute is the backlink for msDS-KeyPrincipal.
   * - ldapDisplayName: msDS-KeyPrincipalBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2319
   */
  msDsKeyPrincipalBl = "msDS-KeyPrincipalBL",
  /**
   * - Admin DisplayName: Authentication Policy Silo Members Backlink
   * - Description: This attribute is the backlink for msDS-AuthNPolicySiloMembers.
   * - ldapDisplayName: msDS-AuthNPolicySiloMembersBL
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2288
   */
  msDsAuthNPolicySiloMembersBl = "msDS-AuthNPolicySiloMembersBL",
  /**
   * - Admin DisplayName: Assigned Authentication Policy Silo
   * - Description: This attribute specifies which AuthNPolicySilo a principal is assigned to.
   * - ldapDisplayName: msDS-AssignedAuthNPolicySilo
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2285
   */
  msDsAssignedAuthNPolicySilo = "msDS-AssignedAuthNPolicySilo",
  /**
   * - Admin DisplayName: Assigned Authentication Policy
   * - Description: This attribute specifies which AuthNPolicy should be applied to this principal.
   * - ldapDisplayName: msDS-AssignedAuthNPolicy
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2295
   */
  msDsAssignedAuthNPolicy = "msDS-AssignedAuthNPolicy",
  /**
   * - Admin DisplayName: ms-DS-SyncServerUrl
   * - Description: Use this attribute to store the sync server (Url format) which hosts the user sync folder
   * - ldapDisplayName: msDS-SyncServerUrl
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2276
   */
  msDsSyncServerUrl = "msDS-SyncServerUrl",
  /**
   * - Admin DisplayName: ms-DS-Primary-Computer
   * - Description: For a user or group object, identifies the primary computers.
   * - ldapDisplayName: msDS-PrimaryComputer
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2167
   */
  msDsPrimaryComputer = "msDS-PrimaryComputer",
  /**
   * - Admin DisplayName: ms-DS-Secondary-KrbTgt-Number
   * - Description: For a user object (krbtgt), acting as a secondary domain master secret, identifies the protocol identification number associated with the secondary domain.
   * - ldapDisplayName: msDS-SecondaryKrbTgtNumber
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1929
   */
  msDsSecondaryKrbTgtNumber = "msDS-SecondaryKrbTgtNumber",
  /**
   * - Admin DisplayName: msDS-SupportedEncryptionTypes
   * - Description: The encryption algorithms supported by user, computer or trust accounts. The KDC uses this information while generating a service ticket for this account. Services/Computers may automatically update this attribute on their respective accounts in Active Directory, and therefore need write access to this attribute.
   * - ldapDisplayName: msDS-SupportedEncryptionTypes
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1963
   */
  msDsSupportedEncryptionTypes = "msDS-SupportedEncryptionTypes",
  /**
   * - Admin DisplayName: MS-PKI-RoamingTimeStamp
   * - Description: Time stamp for last change to roaming tokens
   * - ldapDisplayName: msPKIRoamingTimeStamp
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.1892
   */
  msPkiRoamingTimeStamp = "msPKIRoamingTimeStamp",
  /**
   * - Admin DisplayName: MS-PKI-DPAPIMasterKeys
   * - Description: Storage of encrypted DPAPI Master Keys for user
   * - ldapDisplayName: msPKIDPAPIMasterKeys
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.4.1893
   */
  msPkidpapiMasterKeys = "msPKIDPAPIMasterKeys",
  /**
   * - Admin DisplayName: MS-PKI-AccountCredentials
   * - Description: Storage of encrypted user credential token blobs for roaming
   * - ldapDisplayName: msPKIAccountCredentials
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.4.1894
   */
  msPkiAccountCredentials = "msPKIAccountCredentials",
  /**
   * - Admin DisplayName: ms-RADIUS-FramedInterfaceId
   * - Description: This Attribute indicates the IPv6 interface identifier to be configured for the user.
   * - ldapDisplayName: msRADIUS-FramedInterfaceId
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1913
   */
  msRadiusFramedInterfaceId = "msRADIUS-FramedInterfaceId",
  /**
   * - Admin DisplayName: ms-RADIUS-SavedFramedInterfaceId
   * - Description: This Attribute indicates the IPv6 interface identifier to be configured for the user.
   * - ldapDisplayName: msRADIUS-SavedFramedInterfaceId
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1914
   */
  msRadiusSavedFramedInterfaceId = "msRADIUS-SavedFramedInterfaceId",
  /**
   * - Admin DisplayName: ms-RADIUS-FramedIpv6Prefix
   * - Description: This Attribute indicates an IPv6 prefix (and corresponding route) to be configured for the user.
   * - ldapDisplayName: msRADIUS-FramedIpv6Prefix
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1915
   */
  msRadiusFramedIpv6Prefix = "msRADIUS-FramedIpv6Prefix",
  /**
   * - Admin DisplayName: ms-RADIUS-SavedFramedIpv6Prefix
   * - Description: This Attribute indicates an IPv6 prefix (and corresponding route) to be configured for the user.
   * - ldapDisplayName: msRADIUS-SavedFramedIpv6Prefix
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1916
   */
  msRadiusSavedFramedIpv6Prefix = "msRADIUS-SavedFramedIpv6Prefix",
  /**
   * - Admin DisplayName: ms-RADIUS-FramedIpv6Route
   * - Description: This Attribute provides routing information to be configured for the user on the NAS.
   * - ldapDisplayName: msRADIUS-FramedIpv6Route
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1917
   */
  msRadiusFramedIpv6Route = "msRADIUS-FramedIpv6Route",
  /**
   * - Admin DisplayName: ms-RADIUS-SavedFramedIpv6Route
   * - Description: This Attribute provides routing information to be configured for the user on the NAS.
   * - ldapDisplayName: msRADIUS-SavedFramedIpv6Route
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1918
   */
  msRadiusSavedFramedIpv6Route = "msRADIUS-SavedFramedIpv6Route",
  /**
   * - Admin DisplayName: msDS-LastSuccessfulInteractiveLogonTime
   * - Description: The time that the correct password was presented during a C-A-D logon.
   * - ldapDisplayName: msDS-LastSuccessfulInteractiveLogonTime
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.1970
   */
  msDsLastSuccessfulInteractiveLogonTime = "msDS-LastSuccessfulInteractiveLogonTime",
  /**
   * - Admin DisplayName: msDS-LastFailedInteractiveLogonTime
   * - Description: The time that an incorrect password was presented during a C-A-D logon.
   * - ldapDisplayName: msDS-LastFailedInteractiveLogonTime
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.1971
   */
  msDsLastFailedInteractiveLogonTime = "msDS-LastFailedInteractiveLogonTime",
  /**
   * - Admin DisplayName: msDS-FailedInteractiveLogonCount
   * - Description: The total number of failed interactive logons since this feature was turned on.
   * - ldapDisplayName: msDS-FailedInteractiveLogonCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1972
   */
  msDsFailedInteractiveLogonCount = "msDS-FailedInteractiveLogonCount",
  /**
   * - Admin DisplayName: ms-DS-Failed-Interactive-Logon-Count-At-Last-Successful-Logon
   * - Description: The total number of failed interactive logons up until the last successful C-A-D logon.
   * - ldapDisplayName: msDS-FailedInteractiveLogonCountAtLastSuccessfulLogon
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1973
   */
  msDsFailedInteractiveLogonCountAtLastSuccessfulLogon = "msDS-FailedInteractiveLogonCountAtLastSuccessfulLogon",
  /**
   * - Admin DisplayName: ms-TS-Profile-Path
   * - Description: Terminal Services Profile Path specifies a roaming or mandatory profile path to use when the user logs on to the Terminal Server. The profile path is in the following network path format: \\servername\profiles folder name\username
   * - ldapDisplayName: msTSProfilePath
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1976
   */
  msTsProfilePath = "msTSProfilePath",
  /**
   * - Admin DisplayName: ms-TS-Home-Directory
   * - Description: Terminal Services Home Directory specifies the Home directory for the user. Each user on a Terminal Server has a unique home directory. This ensures that application information is stored separately for each user in a multi-user environment. To set a home directory on the local computer, specify a local path; for example, C:\Path. To set a home directory in a network environment, you must first set the TerminalServicesHomeDrive property, and then set this property to a UNC path.
   * - ldapDisplayName: msTSHomeDirectory
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1977
   */
  msTsHomeDirectory = "msTSHomeDirectory",
  /**
   * - Admin DisplayName: ms-TS-Home-Drive
   * - Description: Terminal Services Home Drive specifies a Home drive for the user. In a network environment, this property is a string containing a drive specification (a drive letter followed by a colon) to which the UNC path specified in the TerminalServicesHomeDirectory property is mapped. To set a home directory in a network environment, you must first set this property and then set the TerminalServicesHomeDirectory property.
   * - ldapDisplayName: msTSHomeDrive
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1978
   */
  msTsHomeDrive = "msTSHomeDrive",
  /**
   * - Admin DisplayName: ms-TS-Allow-Logon
   * - Description: Terminal Services Allow Logon specifies whether the user is allowed to log on to the Terminal Server. The value is 1 if logon is allowed, and 0 if logon is not allowed.
   * - ldapDisplayName: msTSAllowLogon
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.1979
   */
  msTsAllowLogon = "msTSAllowLogon",
  /**
   * - Admin DisplayName: ms-TS-Remote-Control
   * - Description: Terminal Services Remote Control specifies the whether to allow remote observation or remote control of the user's Terminal Services session. For a description of these values, see the RemoteControl method of the Win32_TSRemoteControlSetting WMI class. 0 - Disable, 1 - EnableInputNotify, 2 - EnableInputNoNotify, 3 - EnableNoInputNotify and 4 - EnableNoInputNoNotify
   * - ldapDisplayName: msTSRemoteControl
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1980
   */
  msTsRemoteControl = "msTSRemoteControl",
  /**
   * - Admin DisplayName: ms-TS-Max-Disconnection-Time
   * - Description: Terminal Services Session Maximum Disconnection Time is maximum amount of time, in minutes, that a disconnected Terminal Services session remains active on the Terminal Server. After the specified number of minutes have elapsed, the session is terminated.
   * - ldapDisplayName: msTSMaxDisconnectionTime
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1981
   */
  msTsMaxDisconnectionTime = "msTSMaxDisconnectionTime",
  /**
   * - Admin DisplayName: ms-TS-Max-Connection-Time
   * - Description: Terminal Services Session maximum Connection Time is Maximum duration, in minutes, of the Terminal Services session. After the specified number of minutes have elapsed, the session can be disconnected or terminated.
   * - ldapDisplayName: msTSMaxConnectionTime
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1982
   */
  msTsMaxConnectionTime = "msTSMaxConnectionTime",
  /**
   * - Admin DisplayName: ms-TS-Max-Idle-Time
   * - Description: Terminal Services Session Maximum Idle Time is maximum amount of time, in minutes, that the Terminal Services session can remain idle. After the specified number of minutes have elapsed, the session can be disconnected or terminated.
   * - ldapDisplayName: msTSMaxIdleTime
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1983
   */
  msTsMaxIdleTime = "msTSMaxIdleTime",
  /**
   * - Admin DisplayName: ms-TS-Reconnection-Action
   * - Description: Terminal Services Session Reconnection Action specifies whether to allow reconnection to a disconnected Terminal Services session from any client computer. The value is 1 if reconnection is allowed from the original client computer only, and 0 if reconnection from any client computer is allowed.
   * - ldapDisplayName: msTSReconnectionAction
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.1984
   */
  msTsReconnectionAction = "msTSReconnectionAction",
  /**
   * - Admin DisplayName: ms-TS-Broken-Connection-Action
   * - Description: Terminal Services Session Broken Connection Action specifies the action to take when a Terminal Services session limit is reached. The value is 1 if the client session should be terminated, and 0 if the client session should be disconnected.
   * - ldapDisplayName: msTSBrokenConnectionAction
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.1985
   */
  msTsBrokenConnectionAction = "msTSBrokenConnectionAction",
  /**
   * - Admin DisplayName: ms-TS-Connect-Client-Drives
   * - Description: Terminal Services Session Connect Client Drives At Logon specifies whether to reconnect to mapped client drives at logon. The value is 1 if reconnection is enabled, and 0 if reconnection is disabled.
   * - ldapDisplayName: msTSConnectClientDrives
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.1986
   */
  msTsConnectClientDrives = "msTSConnectClientDrives",
  /**
   * - Admin DisplayName: ms-TS-Connect-Printer-Drives
   * - Description: Terminal Services Session Connect Printer Drives At Logon specifies whether to reconnect to mapped client printers at logon. The value is 1 if reconnection is enabled, and 0 if reconnection is disabled.
   * - ldapDisplayName: msTSConnectPrinterDrives
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.1987
   */
  msTsConnectPrinterDrives = "msTSConnectPrinterDrives",
  /**
   * - Admin DisplayName: ms-TS-Default-To-Main-Printer
   * - Description: Terminal Services Default To Main Printer specifies whether to print automatically to the client's default printer. The value is 1 if printing to the client's default printer is enabled, and 0 if it is disabled.
   * - ldapDisplayName: msTSDefaultToMainPrinter
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.1988
   */
  msTsDefaultToMainPrinter = "msTSDefaultToMainPrinter",
  /**
   * - Admin DisplayName: ms-TS-Work-Directory
   * - Description: Terminal Services Session Work Directory specifies the working directory path for the user. To set an initial application to start when the user logs on to the Terminal Server, you must first set the TerminalServicesInitialProgram property, and then set this property.
   * - ldapDisplayName: msTSWorkDirectory
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1989
   */
  msTsWorkDirectory = "msTSWorkDirectory",
  /**
   * - Admin DisplayName: ms-TS-Initial-Program
   * - Description: Terminal Services Session Initial Program specifies the Path and file name of the application that the user wants to start automatically when the user logs on to the Terminal Server. To set an initial application to start when the user logs on, you must first set this property and then set the TerminalServicesWorkDirectory property. If you set only the TerminalServicesInitialProgram property, the application starts in the user's session in the default user directory.
   * - ldapDisplayName: msTSInitialProgram
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1990
   */
  msTsInitialProgram = "msTSInitialProgram",
  /**
   * - Admin DisplayName: MS-TS-Property01
   * - Description: Placeholder Terminal Server Property 01
   * - ldapDisplayName: msTSProperty01
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1991
   */
  msTsProperty01 = "msTSProperty01",
  /**
   * - Admin DisplayName: MS-TS-Property02
   * - Description: Placeholder Terminal Server Property 02
   * - ldapDisplayName: msTSProperty02
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1992
   */
  msTsProperty02 = "msTSProperty02",
  /**
   * - Admin DisplayName: MS-TS-ExpireDate
   * - Description: TS Expiration Date
   * - ldapDisplayName: msTSExpireDate
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.1993
   */
  msTsExpireDate = "msTSExpireDate",
  /**
   * - Admin DisplayName: MS-TS-LicenseVersion
   * - Description: TS License Version
   * - ldapDisplayName: msTSLicenseVersion
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1994
   */
  msTsLicenseVersion = "msTSLicenseVersion",
  /**
   * - Admin DisplayName: MS-TS-ManagingLS
   * - Description: TS Managing License Server
   * - ldapDisplayName: msTSManagingLS
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1995
   */
  msTsManagingLs = "msTSManagingLS",
  /**
   * - Admin DisplayName: ms-DS-User-Password-Expiry-Time-Computed
   * - Description: Contains the expiry time for the user's current password
   * - ldapDisplayName: msDS-UserPasswordExpiryTimeComputed
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.1996
   */
  msDsUserPasswordExpiryTimeComputed = "msDS-UserPasswordExpiryTimeComputed",
  /**
   * - Admin DisplayName: ms-DS-AuthenticatedAt-DC
   * - Description: Forwardlink for ms-DS-AuthenticatedTo-Accountlist; for a User, identifies which DC a user has authenticated to
   * - ldapDisplayName: msDS-AuthenticatedAtDC
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1958
   */
  msDsAuthenticatedAtDc = "msDS-AuthenticatedAtDC",
  /**
   * - Admin DisplayName: MS-TS-ExpireDate2
   * - Description: Expiration date of the second TS per user CAL.
   * - ldapDisplayName: msTSExpireDate2
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.2000
   */
  msTsExpireDate2 = "msTSExpireDate2",
  /**
   * - Admin DisplayName: MS-TS-LicenseVersion2
   * - Description: Version of the second TS per user CAL.
   * - ldapDisplayName: msTSLicenseVersion2
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2001
   */
  msTsLicenseVersion2 = "msTSLicenseVersion2",
  /**
   * - Admin DisplayName: MS-TS-ManagingLS2
   * - Description: Issuer name of the second TS per user CAL.
   * - ldapDisplayName: msTSManagingLS2
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2002
   */
  msTsManagingLs2 = "msTSManagingLS2",
  /**
   * - Admin DisplayName: MS-TS-ExpireDate3
   * - Description: Expiration date of the third TS per user CAL.
   * - ldapDisplayName: msTSExpireDate3
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.2003
   */
  msTsExpireDate3 = "msTSExpireDate3",
  /**
   * - Admin DisplayName: MS-TS-LicenseVersion3
   * - Description: Version of the third TS per user CAL.
   * - ldapDisplayName: msTSLicenseVersion3
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2004
   */
  msTsLicenseVersion3 = "msTSLicenseVersion3",
  /**
   * - Admin DisplayName: MS-TS-ManagingLS3
   * - Description: Issuer name of the third TS per user CAL.
   * - ldapDisplayName: msTSManagingLS3
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2005
   */
  msTsManagingLs3 = "msTSManagingLS3",
  /**
   * - Admin DisplayName: MS-TS-ExpireDate4
   * - Description: Expiration date of the fourth TS per user CAL.
   * - ldapDisplayName: msTSExpireDate4
   * - attributeSyntax: 2.5.5.11
   * - attributeID: 1.2.840.113556.1.4.2006
   */
  msTsExpireDate4 = "msTSExpireDate4",
  /**
   * - Admin DisplayName: MS-TS-LicenseVersion4
   * - Description: Version of the fourth TS per user CAL.
   * - ldapDisplayName: msTSLicenseVersion4
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2007
   */
  msTsLicenseVersion4 = "msTSLicenseVersion4",
  /**
   * - Admin DisplayName: MS-TS-ManagingLS4
   * - Description: Issuer name of the fourth TS per user CAL.
   * - ldapDisplayName: msTSManagingLS4
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2008
   */
  msTsManagingLs4 = "msTSManagingLS4",
  /**
   * - Admin DisplayName: MS-TSLS-Property01
   * - Description: Placeholder Terminal Server License Server Property 01
   * - ldapDisplayName: msTSLSProperty01
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2009
   */
  msTslsProperty01 = "msTSLSProperty01",
  /**
   * - Admin DisplayName: MS-TSLS-Property02
   * - Description: Placeholder Terminal Server License Server Property 02
   * - ldapDisplayName: msTSLSProperty02
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.2010
   */
  msTslsProperty02 = "msTSLSProperty02",
  /**
   * - Admin DisplayName: Resultant password settings object applied
   * - Description: Resultant password settings object applied to this object
   * - ldapDisplayName: msDS-ResultantPSO
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2022
   */
  msDsResultantPso = "msDS-ResultantPSO",
  /**
   * - Admin DisplayName: ms-PKI-Credential-Roaming-Tokens
   * - Description: Storage of encrypted user credential token blobs for roaming.
   * - ldapDisplayName: msPKI-CredentialRoamingTokens
   * - attributeSyntax: 2.5.5.7
   * - attributeID: 1.2.840.113556.1.4.2050
   */
  msPkiCredentialRoamingTokens = "msPKI-CredentialRoamingTokens",
  /**
   * - Admin DisplayName: ms-TS-Primary-Desktop
   * - Description: This attribute represents the forward link to user's primary desktop.
   * - ldapDisplayName: msTSPrimaryDesktop
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2073
   */
  msTsPrimaryDesktop = "msTSPrimaryDesktop",
  /**
   * - Admin DisplayName: ms-TS-Secondary-Desktops
   * - Description: This attribute represents the array of forward links to user's secondary desktops.
   * - ldapDisplayName: msTSSecondaryDesktops
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.2075
   */
  msTsSecondaryDesktops = "msTSSecondaryDesktops",
  /**
   * - Admin DisplayName: Business-Category
   * - Description: Business-Category
   * - ldapDisplayName: businessCategory
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 2.5.4.15
   */
  businessCategory = "businessCategory",
  /**
   * - Admin DisplayName: User-Workstations
   * - Description: User-Workstations
   * - ldapDisplayName: userWorkstations
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.86
   */
  userWorkstations = "userWorkstations",
  /**
   * - Admin DisplayName: User-Shared-Folder-Other
   * - Description: User-Shared-Folder-Other
   * - ldapDisplayName: userSharedFolderOther
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.752
   */
  userSharedFolderOther = "userSharedFolderOther",
  /**
   * - Admin DisplayName: User-Shared-Folder
   * - Description: User-Shared-Folder
   * - ldapDisplayName: userSharedFolder
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.751
   */
  userSharedFolder = "userSharedFolder",
  /**
   * - Admin DisplayName: User-Principal-Name
   * - Description: User-Principal-Name
   * - ldapDisplayName: userPrincipalName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.656
   */
  userPrincipalName = "userPrincipalName",
  /**
   * - Admin DisplayName: User-Parameters
   * - Description: User-Parameters
   * - ldapDisplayName: userParameters
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.138
   */
  userParameters = "userParameters",
  /**
   * - Admin DisplayName: User-Account-Control
   * - Description: User-Account-Control
   * - ldapDisplayName: userAccountControl
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.8
   */
  userAccountControl = "userAccountControl",
  /**
   * - Admin DisplayName: Unicode-Pwd
   * - Description: Unicode-Pwd
   * - ldapDisplayName: unicodePwd
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.90
   */
  unicodePwd = "unicodePwd",
  /**
   * - Admin DisplayName: Terminal-Server
   * - Description: Terminal-Server
   * - ldapDisplayName: terminalServer
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.885
   */
  terminalServer = "terminalServer",
  /**
   * - Admin DisplayName: Service-Principal-Name
   * - Description: Service-Principal-Name
   * - ldapDisplayName: servicePrincipalName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.771
   */
  servicePrincipalName = "servicePrincipalName",
  /**
   * - Admin DisplayName: Script-Path
   * - Description: Script-Path
   * - ldapDisplayName: scriptPath
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.62
   */
  scriptPath = "scriptPath",
  /**
   * - Admin DisplayName: Pwd-Last-Set
   * - Description: Pwd-Last-Set
   * - ldapDisplayName: pwdLastSet
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.96
   */
  pwdLastSet = "pwdLastSet",
  /**
   * - Admin DisplayName: Profile-Path
   * - Description: Profile-Path
   * - ldapDisplayName: profilePath
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.139
   */
  profilePath = "profilePath",
  /**
   * - Admin DisplayName: Primary-Group-ID
   * - Description: Primary-Group-ID
   * - ldapDisplayName: primaryGroupID
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.98
   */
  primaryGroupId = "primaryGroupID",
  /**
   * - Admin DisplayName: Preferred-OU
   * - Description: Preferred-OU
   * - ldapDisplayName: preferredOU
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.97
   */
  preferredOu = "preferredOU",
  /**
   * - Admin DisplayName: Other-Login-Workstations
   * - Description: Other-Login-Workstations
   * - ldapDisplayName: otherLoginWorkstations
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.91
   */
  otherLoginWorkstations = "otherLoginWorkstations",
  /**
   * - Admin DisplayName: Operator-Count
   * - Description: Operator-Count
   * - ldapDisplayName: operatorCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.144
   */
  operatorCount = "operatorCount",
  /**
   * - Admin DisplayName: Nt-Pwd-History
   * - Description: Nt-Pwd-History
   * - ldapDisplayName: ntPwdHistory
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.94
   */
  ntPwdHistory = "ntPwdHistory",
  /**
   * - Admin DisplayName: Network-Address
   * - Description: Network-Address
   * - ldapDisplayName: networkAddress
   * - attributeSyntax: 2.5.5.4
   * - attributeID: 1.2.840.113556.1.2.459
   */
  networkAddress = "networkAddress",
  /**
   * - Admin DisplayName: msRASSavedFramedRoute
   * - Description: msRASSavedFramedRoute
   * - ldapDisplayName: msRASSavedFramedRoute
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1191
   */
  msRasSavedFramedRoute = "msRASSavedFramedRoute",
  /**
   * - Admin DisplayName: msRASSavedFramedIPAddress
   * - Description: msRASSavedFramedIPAddress
   * - ldapDisplayName: msRASSavedFramedIPAddress
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1190
   */
  msRasSavedFramedIpAddress = "msRASSavedFramedIPAddress",
  /**
   * - Admin DisplayName: msRASSavedCallbackNumber
   * - Description: msRASSavedCallbackNumber
   * - ldapDisplayName: msRASSavedCallbackNumber
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1189
   */
  msRasSavedCallbackNumber = "msRASSavedCallbackNumber",
  /**
   * - Admin DisplayName: msRADIUSServiceType
   * - Description: msRADIUSServiceType
   * - ldapDisplayName: msRADIUSServiceType
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1171
   */
  msRadiusServiceType = "msRADIUSServiceType",
  /**
   * - Admin DisplayName: msRADIUSFramedRoute
   * - Description: msRADIUSFramedRoute
   * - ldapDisplayName: msRADIUSFramedRoute
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1158
   */
  msRadiusFramedRoute = "msRADIUSFramedRoute",
  /**
   * - Admin DisplayName: msRADIUSFramedIPAddress
   * - Description: msRADIUSFramedIPAddress
   * - ldapDisplayName: msRADIUSFramedIPAddress
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1153
   */
  msRadiusFramedIpAddress = "msRADIUSFramedIPAddress",
  /**
   * - Admin DisplayName: msRADIUSCallbackNumber
   * - Description: msRADIUSCallbackNumber
   * - ldapDisplayName: msRADIUSCallbackNumber
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1145
   */
  msRadiusCallbackNumber = "msRADIUSCallbackNumber",
  /**
   * - Admin DisplayName: msNPSavedCallingStationID
   * - Description: msNPSavedCallingStationID
   * - ldapDisplayName: msNPSavedCallingStationID
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1130
   */
  msNpSavedCallingStationId = "msNPSavedCallingStationID",
  /**
   * - Admin DisplayName: msNPCallingStationID
   * - Description: msNPCallingStationID
   * - ldapDisplayName: msNPCallingStationID
   * - attributeSyntax: 2.5.5.5
   * - attributeID: 1.2.840.113556.1.4.1124
   */
  msNpCallingStationId = "msNPCallingStationID",
  /**
   * - Admin DisplayName: msNPAllowDialin
   * - Description: msNPAllowDialin
   * - ldapDisplayName: msNPAllowDialin
   * - attributeSyntax: 2.5.5.8
   * - attributeID: 1.2.840.113556.1.4.1119
   */
  msNpAllowDialin = "msNPAllowDialin",
  /**
   * - Admin DisplayName: MSMQ-Sign-Certificates-Mig
   * - Description: MSMQ-Sign-Certificates-Mig
   * - ldapDisplayName: mSMQSignCertificatesMig
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.967
   */
  mSmqSignCertificatesMig = "mSMQSignCertificatesMig",
  /**
   * - Admin DisplayName: MSMQ-Sign-Certificates
   * - Description: MSMQ-Sign-Certificates
   * - ldapDisplayName: mSMQSignCertificates
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.947
   */
  mSmqSignCertificates = "mSMQSignCertificates",
  /**
   * - Admin DisplayName: MSMQ-Digests-Mig
   * - Description: MSMQ-Digests-Mig
   * - ldapDisplayName: mSMQDigestsMig
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.966
   */
  mSmqDigestsMig = "mSMQDigestsMig",
  /**
   * - Admin DisplayName: MSMQ-Digests
   * - Description: MSMQ-Digests
   * - ldapDisplayName: mSMQDigests
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.948
   */
  mSmqDigests = "mSMQDigests",
  /**
   * - Admin DisplayName: ms-IIS-FTP-Root
   * - Description: Virtual FTP Root where user home directory resides.
   * - ldapDisplayName: msIIS-FTPRoot
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1785
   */
  msIisFtpRoot = "msIIS-FTPRoot",
  /**
   * - Admin DisplayName: ms-IIS-FTP-Dir
   * - Description: Relative user directory on an FTP Root share.
   * - ldapDisplayName: msIIS-FTPDir
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.1786
   */
  msIisFtpDir = "msIIS-FTPDir",
  /**
   * - Admin DisplayName: ms-DS-User-Account-Control-Computed
   * - Description: ms-DS-User-Account-Control-Computed
   * - ldapDisplayName: msDS-User-Account-Control-Computed
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.1460
   */
  msDsUserAccountControlComputed = "msDS-User-Account-Control-Computed",
  /**
   * - Admin DisplayName: ms-DS-Site-Affinity
   * - Description: ms-DS-Site-Affinity
   * - ldapDisplayName: msDS-Site-Affinity
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.1443
   */
  msDsSiteAffinity = "msDS-Site-Affinity",
  /**
   * - Admin DisplayName: MS-DS-Creator-SID
   * - Description: MS-DS-Creator-SID
   * - ldapDisplayName: mS-DS-CreatorSID
   * - attributeSyntax: 2.5.5.17
   * - attributeID: 1.2.840.113556.1.4.1410
   */
  mSDsCreatorSid = "mS-DS-CreatorSID",
  /**
   * - Admin DisplayName: ms-DS-Cached-Membership-Time-Stamp
   * - Description: ms-DS-Cached-Membership-Time-Stamp
   * - ldapDisplayName: msDS-Cached-Membership-Time-Stamp
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.1442
   */
  msDsCachedMembershipTimeStamp = "msDS-Cached-Membership-Time-Stamp",
  /**
   * - Admin DisplayName: ms-DS-Cached-Membership
   * - Description: ms-DS-Cached-Membership
   * - ldapDisplayName: msDS-Cached-Membership
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.1441
   */
  msDsCachedMembership = "msDS-Cached-Membership",
  /**
   * - Admin DisplayName: ms-DRM-Identity-Certificate
   * - Description: The XrML digital rights management certificates for this user.
   * - ldapDisplayName: msDRM-IdentityCertificate
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.1843
   */
  msDrmIdentityCertificate = "msDRM-IdentityCertificate",
  /**
   * - Admin DisplayName: ms-COM-UserPartitionSetLink
   * - Description: Link from a User to a PartitionSet. Default = adminDisplayName
   * - ldapDisplayName: msCOM-UserPartitionSetLink
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.1426
   */
  msComUserPartitionSetLink = "msCOM-UserPartitionSetLink",
  /**
   * - Admin DisplayName: Max-Storage
   * - Description: Max-Storage
   * - ldapDisplayName: maxStorage
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.76
   */
  maxStorage = "maxStorage",
  /**
   * - Admin DisplayName: Logon-Workstation
   * - Description: Logon-Workstation
   * - ldapDisplayName: logonWorkstation
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.65
   */
  logonWorkstation = "logonWorkstation",
  /**
   * - Admin DisplayName: Logon-Hours
   * - Description: Logon-Hours
   * - ldapDisplayName: logonHours
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.64
   */
  logonHours = "logonHours",
  /**
   * - Admin DisplayName: Logon-Count
   * - Description: Logon-Count
   * - ldapDisplayName: logonCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.169
   */
  logonCount = "logonCount",
  /**
   * - Admin DisplayName: Lockout-Time
   * - Description: Lockout-Time
   * - ldapDisplayName: lockoutTime
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.662
   */
  lockoutTime = "lockoutTime",
  /**
   * - Admin DisplayName: Locale-ID
   * - Description: Locale-ID
   * - ldapDisplayName: localeID
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.58
   */
  localeId = "localeID",
  /**
   * - Admin DisplayName: Lm-Pwd-History
   * - Description: Lm-Pwd-History
   * - ldapDisplayName: lmPwdHistory
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.160
   */
  lmPwdHistory = "lmPwdHistory",
  /**
   * - Admin DisplayName: Last-Logon-Timestamp
   * - Description: Last-Logon-Timestamp
   * - ldapDisplayName: lastLogonTimestamp
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.1696
   */
  lastLogonTimestamp = "lastLogonTimestamp",
  /**
   * - Admin DisplayName: Last-Logon
   * - Description: Last-Logon
   * - ldapDisplayName: lastLogon
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.52
   */
  lastLogon = "lastLogon",
  /**
   * - Admin DisplayName: Last-Logoff
   * - Description: Last-Logoff
   * - ldapDisplayName: lastLogoff
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.51
   */
  lastLogoff = "lastLogoff",
  /**
   * - Admin DisplayName: Home-Drive
   * - Description: Home-Drive
   * - ldapDisplayName: homeDrive
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.45
   */
  homeDrive = "homeDrive",
  /**
   * - Admin DisplayName: Groups-to-Ignore
   * - Description: Groups-to-Ignore
   * - ldapDisplayName: groupsToIgnore
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.344
   */
  groupsToIgnore = "groupsToIgnore",
  /**
   * - Admin DisplayName: Group-Priority
   * - Description: Group-Priority
   * - ldapDisplayName: groupPriority
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.345
   */
  groupPriority = "groupPriority",
  /**
   * - Admin DisplayName: Group-Membership-SAM
   * - Description: Group-Membership-SAM
   * - ldapDisplayName: groupMembershipSAM
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.166
   */
  groupMembershipSam = "groupMembershipSAM",
  /**
   * - Admin DisplayName: Dynamic-LDAP-Server
   * - Description: Dynamic-LDAP-Server
   * - ldapDisplayName: dynamicLDAPServer
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.537
   */
  dynamicLdapServer = "dynamicLDAPServer",
  /**
   * - Admin DisplayName: Desktop-Profile
   * - Description: Desktop-Profile
   * - ldapDisplayName: desktopProfile
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.346
   */
  desktopProfile = "desktopProfile",
  /**
   * - Admin DisplayName: Default-Class-Store
   * - Description: Default-Class-Store
   * - ldapDisplayName: defaultClassStore
   * - attributeSyntax: 2.5.5.1
   * - attributeID: 1.2.840.113556.1.4.213
   */
  defaultClassStore = "defaultClassStore",
  /**
   * - Admin DisplayName: DBCS-Pwd
   * - Description: DBCS-Pwd
   * - ldapDisplayName: dBCSPwd
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.55
   */
  dBcsPwd = "dBCSPwd",
  /**
   * - Admin DisplayName: Control-Access-Rights
   * - Description: Control-Access-Rights
   * - ldapDisplayName: controlAccessRights
   * - attributeSyntax: 2.5.5.10
   * - attributeID: 1.2.840.113556.1.4.200
   */
  controlAccessRights = "controlAccessRights",
  /**
   * - Admin DisplayName: Code-Page
   * - Description: Code-Page
   * - ldapDisplayName: codePage
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.16
   */
  codePage = "codePage",
  /**
   * - Admin DisplayName: Bad-Pwd-Count
   * - Description: Bad-Pwd-Count
   * - ldapDisplayName: badPwdCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.12
   */
  badPwdCount = "badPwdCount",
  /**
   * - Admin DisplayName: Bad-Password-Time
   * - Description: Bad-Password-Time
   * - ldapDisplayName: badPasswordTime
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.49
   */
  badPasswordTime = "badPasswordTime",
  /**
   * - Admin DisplayName: Admin-Count
   * - Description: Admin-Count
   * - ldapDisplayName: adminCount
   * - attributeSyntax: 2.5.5.9
   * - attributeID: 1.2.840.113556.1.4.150
   */
  adminCount = "adminCount",
  /**
   * - Admin DisplayName: ACS-Policy-Name
   * - Description: ACS-Policy-Name
   * - ldapDisplayName: aCSPolicyName
   * - attributeSyntax: 2.5.5.12
   * - attributeID: 1.2.840.113556.1.4.772
   */
  aCsPolicyName = "aCSPolicyName",
  /**
   * - Admin DisplayName: Account-Expires
   * - Description: Account-Expires
   * - ldapDisplayName: accountExpires
   * - attributeSyntax: 2.5.5.16
   * - attributeID: 1.2.840.113556.1.4.159
   */
  accountExpires = "accountExpires",
}
