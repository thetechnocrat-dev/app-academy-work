require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'active_support/inflector'

class ControllerBase
  attr_reader :req, :res, :params
  attr_accessor :already_built_response, :session
  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
    @already_built_response = false
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    unless already_built_response?
      self.already_built_response = true
      self.res.header["location"] = url
      self.res.status = 302
      session.store_session(res)
    else
      raise "already rendered"
    end
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    unless already_built_response?
      self.res.header['Content-Type'] = content_type
      self.already_built_response = true
      self.res.write(content)
      session.store_session(res)
    else
      raise "already rendered"
    end
  end


  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    file_path = "views/#{self.class.to_s.underscore}/#{template_name}.html.erb"
    html_erb_content = File.read(file_path)
    content = ERB.new(html_erb_content).result(binding)
    content_type = 'text/html'
    render_content(content, content_type)
    session.store_session(res)
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end
