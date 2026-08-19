//
//  UserAccount.m
//  Account
//
//  Created by 朱元清 on 2021/4/1.
//

#import "UserAccount.h"

static NSString * const kUserDefaultsUsernameKey = @"kUserDefaultsUsernameKey";
static NSString * const kUserDefaultsEmailKey = @"kUserDefaultsEmailKey";
static NSString * const kUserDefaultsLoggedInKey = @"kUserDefaultsLoggedInKey";

@interface UserAccount ()

@property (nonatomic, copy, readwrite) NSString *username;
@property (nonatomic, copy, readwrite) NSString *email;
@property (nonatomic, assign, readwrite) BOOL isLoggedIn;

@end

@implementation UserAccount

+ (instancetype)sharedAccount {
    static UserAccount *instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[UserAccount alloc] init];
    });
    return instance;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        _username = [defaults stringForKey:kUserDefaultsUsernameKey] ?: @"";
        _email = [defaults stringForKey:kUserDefaultsEmailKey] ?: @"";
        _isLoggedIn = [defaults boolForKey:kUserDefaultsLoggedInKey];
    }
    return self;
}

- (void)loginWithUsername:(NSString *)username
                  password:(NSString *)password
                completion:(void (^)(BOOL success, NSError * _Nullable error))completion {
    if (username.length == 0 || password.length == 0) {
        NSError *error = [NSError errorWithDomain:@"UserAccountError"
                                             code:-1
                                         userInfo:@{NSLocalizedDescriptionKey: @"用户名和密码不能为空"}];
        if (completion) {
            completion(NO, error);
        }
        return;
    }
    
    self.username = username;
    self.email = [NSString stringWithFormat:@"%@@example.com", username];
    self.isLoggedIn = YES;
    
    [self saveToUserDefaults];
    
    if (completion) {
        completion(YES, nil);
    }
}

- (void)logout {
    self.username = @"";
    self.email = @"";
    self.isLoggedIn = NO;
    
    [self saveToUserDefaults];
}

- (void)updateEmail:(NSString *)newEmail
         completion:(void (^)(BOOL success, NSError * _Nullable error))completion {
    if (!self.isLoggedIn) {
        NSError *error = [NSError errorWithDomain:@"UserAccountError"
                                             code:-2
                                         userInfo:@{NSLocalizedDescriptionKey: @"请先登录"}];
        if (completion) {
            completion(NO, error);
        }
        return;
    }
    
    if (newEmail.length == 0) {
        NSError *error = [NSError errorWithDomain:@"UserAccountError"
                                             code:-3
                                         userInfo:@{NSLocalizedDescriptionKey: @"邮箱不能为空"}];
        if (completion) {
            completion(NO, error);
        }
        return;
    }
    
    self.email = newEmail;
    [self saveToUserDefaults];
    
    if (completion) {
        completion(YES, nil);
    }
}

#pragma mark - Private

- (void)saveToUserDefaults {
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setObject:self.username forKey:kUserDefaultsUsernameKey];
    [defaults setObject:self.email forKey:kUserDefaultsEmailKey];
    [defaults setBool:self.isLoggedIn forKey:kUserDefaultsLoggedInKey];
    [defaults synchronize];
}

@end
