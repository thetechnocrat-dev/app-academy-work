class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.new(email: user_params[:email],
                    password: user_params[:password])
    if @user.save()
      render(
        json: "Sign Up Success =)"
      )
    else
      render(
        json: "Sign Up failed"
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
