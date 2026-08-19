#import "CommonUtils.h"

@implementation CommonUtils

+ (BOOL)isNullOrEmpty:(nullable NSString *)string {
    if (string == nil || string == NULL) {
        return YES;
    }
    if ([string isKindOfClass:[NSNull class]]) {
        return YES;
    }
    if ([[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]] length] == 0) {
        return YES;
    }
    return NO;
}

+ (nullable NSString *)safeString:(nullable NSString *)string {
    if ([self isNullOrEmpty:string]) {
        return @"";
    }
    return string;
}

+ (BOOL)isValidEmail:(NSString *)email {
    if ([self isNullOrEmpty:email]) {
        return NO;
    }
    NSString *emailRegex = @"[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
    NSPredicate *emailTest = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", emailRegex];
    return [emailTest evaluateWithObject:email];
}

+ (BOOL)isValidPhoneNumber:(NSString *)phoneNumber {
    if ([self isNullOrEmpty:phoneNumber]) {
        return NO;
    }
    NSString *phoneRegex = @"^1[3-9]\\d{9}$";
    NSPredicate *phoneTest = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", phoneRegex];
    return [phoneTest evaluateWithObject:phoneNumber];
}

+ (NSString *)timestampToString:(NSTimeInterval)timestamp format:(NSString *)format {
    NSDate *date = [NSDate dateWithTimeIntervalSince1970:timestamp];
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:format];
    [formatter setLocale:[NSLocale currentLocale]];
    return [formatter stringFromDate:date];
}

@end
