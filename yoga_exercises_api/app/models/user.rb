class User < ApplicationRecord
    has_secure_password
    # def self.from_token_payload payload
    #     payload['sub']
    #   end
    

    # def to_token_payload
    #     {
    #       sub: id,
    #       name: name
    #     }
    #   end
end
