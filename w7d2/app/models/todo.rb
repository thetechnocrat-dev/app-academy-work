class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
end
