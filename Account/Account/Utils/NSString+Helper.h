#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSString (Helper)

- (BOOL)isValidEmail;
- (BOOL)isValidPhoneNumber;
- (NSString *)trimmedString;
- (BOOL)isBlankString;

@end

NS_ASSUME_NONNULL_END
