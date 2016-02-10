# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  band_id    :integer
#  live       :boolean
#  title      :string
#

class Album < ActiveRecord::Base

  belongs_to(
    :band,
    foreign_key: :band_id,
    class_name: 'Band'
  )

  has_many(
    :tracks,
    foreign_key: :album_id,
    class_name: 'Track'
  )
end
