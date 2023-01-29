<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;

it('allows a user to login successfully', function () {
    $user =  User::factory()->create([
        'email' => 'foo@bar.baz',
        'password' => Hash::make('password')
    ]);

    $this->graphQL(/** @lang GraphQL */'
        mutation ($email: String!, $password: String!) {
            login(input: { email: $email, password: $password }) {
                token
            }
        }',
        [
            'email' => $user->email,
            'password' => 'password'
        ]
    )->assertJsonStructure([
        'data' => [
            'login' => [
                'token',
            ],
        ],
    ]);
});

it('throws an error when credentials are invalid', function () {
    $this->graphQL(/** @lang GraphQL */'
            mutation {
                login(input: {
                    email: "foo@bar.com",
                    password: "supersecret"
                }) {
                    token
                }
            }'
    )->assertGraphQLErrorMessage('The provided credentials are incorrect.');
});

it('retrieves logged in user information', function () {
    $user = Sanctum::actingAs(User::factory()->create());

    $this->graphQL(/** @lang GraphQL */'
        {
            me {
                email
            }
        }
    ')->assertJson([
        'data' => [
            'me' => [
                'email' => $user->email,
            ],
        ],
    ]);
});