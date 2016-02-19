require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  attr_accessor :content

  def initialize(req)
    cookie = req.cookies['_rails_lite_app']
    cookie.nil? ? @content = {} : @content = JSON.parse(cookie)
  end

  def [](key)
    @content[key]
  end

  def []=(key, val)
    @content[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    res.set_cookie('_rails_lite_app', {path: '/', value: @content.to_json})
  end
end
