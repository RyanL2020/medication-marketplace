require "test_helper"

class DrugCartsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @drug_cart = drug_carts(:one)
  end

  test "should get index" do
    get drug_carts_url, as: :json
    assert_response :success
  end

  test "should create drug_cart" do
    assert_difference('DrugCart.count') do
      post drug_carts_url, params: { drug_cart: { drug_id: @drug_cart.drug_id, user_id: @drug_cart.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show drug_cart" do
    get drug_cart_url(@drug_cart), as: :json
    assert_response :success
  end

  test "should update drug_cart" do
    patch drug_cart_url(@drug_cart), params: { drug_cart: { drug_id: @drug_cart.drug_id, user_id: @drug_cart.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy drug_cart" do
    assert_difference('DrugCart.count', -1) do
      delete drug_cart_url(@drug_cart), as: :json
    end

    assert_response 204
  end
end
