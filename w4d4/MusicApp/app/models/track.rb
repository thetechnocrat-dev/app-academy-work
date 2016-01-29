# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  album_id   :integer
#  bonus      :boolean          not null
#  lyrics     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ActiveRecord::Base

  belongs_to(
    :album,
    foreign_key: :album_id
    class_name: 'Album'
  )

  has_one(
    :band
    through: :album,
    source: :band
  )

end
