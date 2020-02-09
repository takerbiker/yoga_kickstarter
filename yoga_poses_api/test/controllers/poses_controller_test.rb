require 'test_helper'

class PosesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pose = poses(:one)
  end

  test "should get index" do
    get poses_url
    assert_response :success
  end

  test "should get new" do
    get new_pose_url
    assert_response :success
  end

  test "should create pose" do
    assert_difference('Pose.count') do
      post poses_url, params: { pose: { category: @pose.category, image: @pose.image, name: @pose.name } }
    end

    assert_redirected_to pose_url(Pose.last)
  end

  test "should show pose" do
    get pose_url(@pose)
    assert_response :success
  end

  test "should get edit" do
    get edit_pose_url(@pose)
    assert_response :success
  end

  test "should update pose" do
    patch pose_url(@pose), params: { pose: { category: @pose.category, image: @pose.image, name: @pose.name } }
    assert_redirected_to pose_url(@pose)
  end

  test "should destroy pose" do
    assert_difference('Pose.count', -1) do
      delete pose_url(@pose)
    end

    assert_redirected_to poses_url
  end
end
