#import <UIKit/UIKit.h>
#import "RCTLog.h"
#import "RCTBridgeModule.h"
#import "Toast+UIView.h"


@interface ToastIOS : NSObject <RCTBridgeModule>
@end

@implementation ToastIOS

RCT_EXPORT_MODULE(ToastIOS)


RCT_EXPORT_METHOD(makeToastActivity) {
    dispatch_async(dispatch_get_main_queue(), ^{
        [[[[UIApplication sharedApplication] windows] firstObject] makeToastActivity];
    });
}

RCT_EXPORT_METHOD(hideToastActivity) {
    dispatch_async(dispatch_get_main_queue(), ^{
        [[[[UIApplication sharedApplication] windows] firstObject] hideToastActivity];
    });
}

RCT_EXPORT_METHOD(show:(NSDictionary *)options) {
    NSString *message  = [options objectForKey:@"message"];
    NSString *duration = [options objectForKey:@"duration"];
    NSString *position = [options objectForKey:@"position"];
    NSNumber *addPixelsY = [options objectForKey:@"addPixelsY"];
    
    if (![position isEqual: @"top"] && ![position isEqual: @"center"] && ![position isEqual: @"bottom"]) {
        RCTLogError(@"invalid position. valid options are 'top', 'center' and 'bottom'");
        return;
    }
    
    NSInteger durationInt;
    if ([duration isEqual: @"short"]) {
        durationInt = 2;
    } else if ([duration isEqual: @"long"]) {
        durationInt = 5;
    } else {
        RCTLogError(@"invalid duration. valid options are 'short' and 'long'");
        return;
    }
    
    dispatch_async(dispatch_get_main_queue(), ^{
        [[[[UIApplication sharedApplication]windows]firstObject] makeToast:message duration:durationInt position:position addPixelsY:addPixelsY == nil ? 0 : [addPixelsY intValue]];
    });
}

RCT_EXPORT_METHOD(hide) {
    dispatch_async(dispatch_get_main_queue(), ^{
        [[[[UIApplication sharedApplication]windows]firstObject] hideToast];
    });
}

@end