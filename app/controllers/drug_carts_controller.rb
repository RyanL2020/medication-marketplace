class DrugCartsController < ApplicationController
  before_action :set_drug_cart, only: [:show, :update, :destroy]

  # GET /drug_carts
  def index
    @drug_carts = DrugCart.all

    render json: @drug_carts
  end

  # GET /drug_carts/1
  def show
    render json: @drug_cart
  end

  # POST /drug_carts
  def create
    @drug_cart = DrugCart.new(drug_cart_params)

    if @drug_cart.save
      render json: @drug_cart, status: :created, location: @drug_cart
    else
      render json: @drug_cart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /drug_carts/1
  def update
    if @drug_cart.update(drug_cart_params)
      render json: @drug_cart
    else
      render json: @drug_cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /drug_carts/1
  def destroy
    @drug_cart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_drug_cart
      @drug_cart = DrugCart.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def drug_cart_params
      params.require(:drug_cart).permit(:user_id, :drug_id)
    end
end
