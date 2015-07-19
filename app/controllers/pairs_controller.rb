class PairsController < ApplicationController
	def index
		@pairs = Pair.all 
	end

	def new
		@pair = Pair.new
	end

	def create
		@pair = Pair.new(pair_params)
		@pair.user_id = current_user.id
		@pair.save
		# redirect_to :pairs
	    respond_to do |format|
	      if @pair.save
	        format.html { redirect_to :pairs, notice: 'Beer pairing was successfully created.' }
	        format.json { render :show, status: :created, location: @pair }
	      else
	        format.html { render :new }
	        format.json { render json: @pair.errors, status: :unprocessable_entity }
	      end
	    end
	end

	def show
		@pair = Pair.find(params[:id])
	end

	def edit
		@pair = Pair.find(params[:id])
	end

	def destroy
	end

	private

	def pair_params
      params.require(:pair).permit(:user_id, :food, :beer, :beer_type)
    end
end