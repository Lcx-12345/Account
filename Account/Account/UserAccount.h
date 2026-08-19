//
//  UserAccount.h
//  Account
//
//  Created by 朱元清 on 2021/4/1.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface UserAccount : NSObject

@property (nonatomic, copy, readonly) NSString *username;
@property (nonatomic, copy, readonly) NSString *email;
@property (nonatomic, assign, readonly) BOOL isLoggedIn;

+ (instancetype)sharedAccount;

- (void)loginWithUsername:(NSString *)username
                  password:(NSString *)password
                completion:(void (^)(BOOL success, NSError * _Nullable error))completion;

- (void)logout;

- (void)updateEmail:(NSString *)newEmail
         completion:(void (^)(BOOL success, NSError * _Nullable error))completion;

@end

NS_ASSUME_NONNULL_END
