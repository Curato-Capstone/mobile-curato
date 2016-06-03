// CalendarManagerBridge.m
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Messaging, NSObject)

RCT_EXTERN_METHOD(call:(NSNumber *)phoneNumber)
RCT_EXTERN_METHOD(text:(NSString *)name address:(NSString *)address)
RCT_EXTERN_METHOD(email:(NSString *)name address:(NSString *)address)

@end