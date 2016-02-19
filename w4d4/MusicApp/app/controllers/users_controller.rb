# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class UsersController < ApplicationController

  def index
    render :index
  end

  def show
    render :show
  end

  def new
    render :new
  end

  def create
    @user = User.new(email: user_params[:email],
                    password: user_params[:password])
    if @user.save()
      log_in_user!(@user)
      flash[:notes] = ["Signup Success"]
      redirect_to user_url(@user)
    else
      flash[:notes] = ["Signup Failure"]
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
