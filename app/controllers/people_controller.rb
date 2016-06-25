class PeopleController < ApplicationController
  def index
    @people = Person.all.order(:id)
    @person = Person.new
  end

  def create
    # binding.pry
    if params[:images]["0"]["classifiers"]
      @result = Person.find_by(name: params[:images]["0"]["classifiers"]["0"]["classes"]["0"]["class"])
      render :success, layout: false
    else
      render :failure, layout: false
    end
    # render json: @result.to_json
  end

  # private
  # def submit_params
  #   params.require(:person).permit(:name)
  # end
end
