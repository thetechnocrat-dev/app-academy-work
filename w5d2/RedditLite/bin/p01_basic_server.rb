require 'rack'

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  res.write('Hello world!')
  res.finish
end

url_path_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  app_path = req.path
  res.write("#{app_path}")
  res.finish
end

Rack::Server.start(
  app: url_path_app,
  Port: 3000
)
