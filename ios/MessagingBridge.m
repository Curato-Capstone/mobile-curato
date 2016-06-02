//
//  MessagingBridge.m
//  curato
//
//  Created by studentuser on 6/1/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

// MessagingBridge.m
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Messaging, NSObject)

RCT_EXTERN_METHOD(testMessaging:(NSString *)name location:(NSString *)location date:(NSNumber *)date)

@end