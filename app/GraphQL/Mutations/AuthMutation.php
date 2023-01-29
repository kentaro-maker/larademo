<?php

namespace App\GraphQL\Mutations;

use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Nuwave\Lighthouse\Exceptions\AuthenticationException;

final class AuthMutation
{

    public function __construct(private AuthManager $authManager)
    {
    }

    // /**
    //  * @param  null  $_
    //  * @param  array{}  $args
    //  */
    // public function __invoke($_, array $args)
    // {
    //     // TODO implement the resolver
    // }
    
    public function login($_, array $args)
    {
        $userProvider = $this->authManager->createUserProvider('users');

        $user = $userProvider->retrieveByCredentials([
            'email'    => $args['email'],
            'password' => $args['password'],
        ]);

        if (!$user || !$userProvider->validateCredentials($user, $args)) {
            throw new AuthenticationException('The provided credentials are incorrect.');
        }

        if ($user instanceof MustVerifyEmail && !$user->hasVerifiedEmail()) {
            throw new AuthenticationException('Your email address is not verified.');
        }

        return [
            'token' => $user->createToken('login')->plainTextToken,
        ];
    }
}
