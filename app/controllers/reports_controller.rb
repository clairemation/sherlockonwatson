class ReportsController < ApplicationController

  def index
    
  end

  def new
    @report = Report.new
    render :_form
  end
end
