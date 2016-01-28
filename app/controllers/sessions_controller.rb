class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(login_params(:email),
                                      login_params(:password))

    if @user
      redirect_to users_url(@user.id)
    else
      render(
        json: "Login failed"
      )
    end
  end

  private

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
