class PeopleController < ApplicationController
  def index
    @people = Person.all
    @person = Person.new
  end

  def create
    binding.pry
    @result = Person.find_by(submit_params)
    if @result
      render :success
    else
      render :failure
    end
    # render json: @result.to_json
  end

  private
  def submit_params
    params.require(:person).permit(:name)
  end
end
