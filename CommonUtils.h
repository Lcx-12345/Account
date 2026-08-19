#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface CommonUtils : NSObject

+ (BOOL)isNullOrEmpty:(nullable NSString *)string;
+ (nullable NSString *)safeString:(nullable NSString *)string;
+ (BOOL)isValidEmail:(NSString *)email;
+ (BOOL)isValidPhoneNumber:(NSString *)phoneNumber;
+ (NSString *)timestampToString:(NSTimeInterval)timestamp format:(NSString *)format;

@end

NS_ASSUME_NONNULL_END
